import {useState} from 'react';

export const ControlledFormPage = () =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [favColor, setFavColor] = useState('')

    return (
        <form>
            <h3>Please add your info: </h3>
            <div>
                <input 
                type="text" 
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={e => setEmail(e.target.value)}                
                />
            </div>
            <div>
                <input 
                type="text" 
                placeholder="Favorite Color" 
                value={favColor}
                onChange={e => setFavColor(e.target.value)}                
                />
            </div>
            <button onClick={e=>{
                alert(`
                    Your name is ${name},
                    Your email is ${email},
                    Your favorite colour is ${favColor}
                    `
                )
                e.preventDefault();
            }}>Submit</button>
        </form>
    )
}