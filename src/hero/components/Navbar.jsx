import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { logout } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

export const Navbar = () => {

    const dispatch = useDispatch();
    const {email} = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div className='navbar'>
            <span>{email}</span>
            <Button
                onClick={onLogout}
                color='danger'
                shape='round'
                variant='outlined'
                style={{
                    backgroundColor: 'transparent',
                    borderWidth: '2px',
                    fontWeight: 'bold',
                }}
            >
                Salir <LogoutOutlined />
            </Button>
        </div>
    )
}
