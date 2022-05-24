import request from 'service/fetch';


export function sendVerifyCode(data?: any) {
    return request.post('/api/user/send_verify_code', data)
}