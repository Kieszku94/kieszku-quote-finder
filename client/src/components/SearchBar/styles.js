import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#e3c2af',
        height: '60px',
        borderRadius: '30px',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        transition: '0.8s',
        boxShadow: '0 0 25px 0 rgba(0, 0, 0, 0.4)',
        },
    input : {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        width: '450px',
        fontWeight: '500',
        fontSize: '16px',
        transition: '0.8s',
    },
}));