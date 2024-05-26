import React from 'react';
import { Box, Typography, TextField, Button, Divider, Alert } from '@mui/material';
import { useState } from 'react';
import './Register.css';
import GoogleIcon from '@mui/icons-material/Google';

const Register = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [alert, setAlert] = useState({
        alert: false,
        status:'',
        message:''
    })
    const [emailError, setEmailError] = useState({
        emailError:false,
        message:'',
    })
    const [phoneError, setPhoneError] = useState({
        phoneError:false,
        message:'',
    })
    const [error, setError] = useState({
        error:false,
        message:'',
    })

    const emailValidation = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };
    
    const phoneValidation = (phone) => {
        const regex = /^9\d{8}$/;
        return regex.test(phone)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        let hasError = false;
    
        // Validación del correo electrónico
        if (!emailValidation(email)) {
            setEmailError({
                emailError: true,
                message: "Ingresa un correo válido",
            });
            hasError = true; // Marcar que hay un error
        } else {
            setEmailError({
                emailError: false,
                message: "",
            });
        }
    
        // Validación del nombre
        if (name === '' || name.length < 2) {
            setNameError({
                nameError: true,
                message: "El nombre no es válido",
            });
            hasError = true; // Marcar que hay un error
        } else {
            setNameError({
                nameError: false,
                message: "",
            });
        }
    
        // Validación del apellido
        if (lastName === '' || lastName.length < 2) {
            setLastNameError({
                lastNameError: true,
                message: "El apellido no es válido",
            });
            hasError = true; // Marcar que hay un error
        } else {
            setLastNameError({
                lastNameError: false,
                message: "",
            });
        }
    
        // Validación del teléfono
        if (!phoneValidation(phone)) {
            setPhoneError({
                phoneError: true,
                message: `Ejemplo: "987546321"`,
            });
            hasError = true; // Marcar que hay un error
        } else {
            setPhoneError({
                phoneError: false,
                message: "",
            });
        }
    
        // Si hay algún error, detener el proceso de envío del formulario
        if (hasError) {
            setAlert({
                alert:true,
                status:'error',
                message:'Verifica los datos ingresados'
            })
            return;
        }
    
        // Si no hay errores, continuar con el proceso de envío del formulario
        console.log(email);
        setError({
            error: false,
            message: "",
        });
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setAlert({
            alert:true,
            status:'success',
            message:'Te has registrado con éxito'
        })
    };

  return (
    <Box sx={{
        my:4,
        width:'100vw',
        height:'90vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }}>
        <Typography variant='h4'>
            Registrarme
        </Typography>

        <Box component='form' onSubmit={handleSubmit} sx={{
            width:'90vw',
            height:'80vh',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <TextField
                className='field'                
                id='name'
                label='Nombre'
                type='name'
                variant='outlined'
                fullWidth
                helperText={nameError.message}
                error={nameError.nameError}
                value={name}
                onChange={(e)=> setName(e.target.value)}
                sx={{
                    my:1
                }}
            />

            <TextField
                className='field'                
                id='lastname'
                label='Apellidos'
                type='lastname'
                variant='outlined'
                fullWidth
                helperText={lastNameError.message}
                error={lastNameError.lastNameError}
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
                sx={{
                    my:1
                }}
            />

            <TextField
                className='field'
                id='email'
                label='Email'
                type='email'
                variant='outlined'
                fullWidth
                helperText={emailError.message}
                error={emailError.emailError}
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                sx={{
                    my:1
                }}
            />

            <TextField
                className='field'                
                id='phone'
                label='Teléfono'
                type='phone'
                variant='outlined'
                fullWidth
                helperText={phoneError.message}
                error={phoneError.phoneError}
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                sx={{
                    my:1
                }}
            />
            <Box sx={{
                mt:2,
                width:'100%'
            }}>
            {alert && alert.status === 'error'?  <Alert severity={alert.status}> {alert.message} </Alert>: null}
            {alert && alert.status === 'success'?  <Alert severity={alert.status}> {alert.message} </Alert>: null}
            </Box>

            <Box sx={{
                my:2,
                width:'100%'
            }}>
                <Button type='submit' variant='contained' sx={{
                    color: 'white',
                    my:2,
                    width:'100%',
                    height: '45px', 
                    borderRadius: '10px', 
                    marginBottom: '20px',  
                }}>
                    Registrarse
                </Button>
            </Box>
            <Box sx={{
                width:'100%'
            }}>
                <Divider variant="middle" sx={{
                    mb:2
                }}/>
                <Button type='submit' variant='outlined' sx={{
                    my:2,
                    px:6,
                    width:'100%',
                    height: '65px', 
                    borderRadius: '10px', 
                    marginBottom: '20px', 
                    display:'flex',
                    justifyContent:'space-around' 
                }}>
                    Registrarme con Google
                    <GoogleIcon></GoogleIcon>
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Register