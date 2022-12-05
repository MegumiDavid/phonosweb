import React from 'react'
import '../style/Login.scss'

const Login = () => {
  return (
    <div className='body'>
        <span class="line"></span>
        <div class="container">
            <div class="box">
                <h1>Entre na sua</h1>
                <h1>Conta, <span class="highlight">Fono</span></h1>
                <form>
                    <div class="inputWrapper">
                        <label for="crf">CRF</label>
                        <input type="number" id="crf" />
                    </div>
                    <div class="inputWrapper">
                        <label for="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div class="inputWrapper">
                        <label for="password">Senha</label>
                        <input type="password" id="password" />
                        <button >
                            <i class="fa-solid fa-eye"></i>
                        </button>
                    </div>
                    <button type="submit" class="btn">Entrar</button>
                </form>
                <p class="cta">Não possui uma conta? <a href="#">Criar conta</a></p>
            </div>
        </div>
    </div>
  )
}

export default Login