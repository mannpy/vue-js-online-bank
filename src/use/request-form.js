import {useField, useForm} from "vee-validate";
import * as yup from 'yup'

export function useRequestForm(fn) {
    const { isSubmitting, handleSubmit } = useForm({
        initialValues: {
            status: 'active'
        }
    })

    const {value: fio, errorMessage: fioError, handleBlur: fioBlur} = useField(
        'fio',
        yup.string().trim().required('Введите ФИО клиента')
    )
    const {value: phone, errorMessage: phoneError, handleBlur: phoneBlur} = useField(
        'phone',
        yup.string().trim().required('Телефон не может быть пустым')
    )
    const {value: amount, errorMessage: amountError, handleBlur: amountBlur} = useField(
        'amount',
        yup.number().min(0, 'Сумма не может быть меньше нуля').required('Введите сумму')
    )
    const {value: status} = useField('status')

    const onSubmit = handleSubmit(fn)

    return {
        fio,
        fioError,
        fioBlur,
        phone,
        phoneError,
        phoneBlur,
        amount,
        amountError,
        amountBlur,
        status,
        isSubmitting,
        onSubmit
    }
}