import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Flex } from 'antd';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';

import { login } from '../../store';


export const LoginPage = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const { email, password } = values;
    if (!captchaValue) {
      Swal.fire({
        icon: "error",
        title: "Captcha incorrecto",
        text: "Debes completar el captcha para continuar.",
      });
      return;
    }

    if (email !== "admin@admin.com" && password !== "Admin") {
      Swal.fire({
        icon: "error",
        title: "Usuario o contraseña incorrecto",
        text: "Por favor, verifica tus credenciales.",
      });

      return
    } 

    dispatch(login({ email, password }));
  };

  return (
    <div className='container'>
      <div className='photo-container'></div>
      <div className='login-container'>
        <div className='header-form'>
          <h1>Iniciar Sesión</h1>
          <small>Bienvenido al portal de salud COOSALUD</small>
        </div>
        <Form
          name="login"
          layout='vertical'
          initialValues={{
            email: '',
            password: '',
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Por favor ingrese su correo electrónico!',
              },
            ]}
            label="Correo Electrónico"
          >
            <Input prefix={<UserOutlined />} placeholder="correo electronico" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su contraseña!',
              },
            ]}
            label="Contraseña"
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="contraseña" />
          </Form.Item>
          <Form.Item>
            <Flex justify="flex-end" align="center">
              <a href="">¿Olvidaste tu contraseña?</a>
            </Flex>
          </Form.Item>
          <Form.Item >
            <Flex justify='center'>
              <ReCAPTCHA
                sitekey="6LfKe-kqAAAAAMWkZSSeYWZ67WqMINtASYZFrhAX"
                onChange={(value) => setCaptchaValue(value)}
              />
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button disabled={!captchaValue} block type="primary" htmlType="submit">
              Iniciar Sesión
            </Button>
          </Form.Item>
          <Form.Item>
            <Button disabled block type="primary" htmlType="button">
              Registrarse
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div >
  )
}
