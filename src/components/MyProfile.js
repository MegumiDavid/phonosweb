import React from 'react'
import myProfilePicture from '../images/anonimous-profile.png'

const MyProfile = ({ fonoData }) => {

  return (
    <div className="myprofile">
        <h1 className="h1">Meu Perfil</h1>
        <div className="mpbox">
            <div className="imgWrap">
                <div className="circle">
                    {/* <img src={fonoData.img} alt="profile" /> */}
                    <img src={ myProfilePicture } alt="profile" />
                </div>
                <h3 className="name">{`${fonoData.fname} ${fonoData.lname}`}</h3>
            </div>
            <div className="info">
                <div className="data">
                    <p className="label">Nome</p>
                    <div className="wrap">
                        <p className="input">{`${fonoData.fname} ${fonoData.lname}`}</p>
                        <i>
                            {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                        </i>
                    </div>
                </div>
                <div className="data">
                    <p className="label">CRFA</p>
                    <div className="wrap">
                        <p className="input">{fonoData.crfa}</p>
                    </div>
                </div>
                <div className="data">
                    <p className="label">Email</p>
                    <div className="wrap">
                        <p className="input">{fonoData.email}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile