import io from './index';

export const registerAndLogin = (data) => {
  return io.post('/chat/user/login', data);
}