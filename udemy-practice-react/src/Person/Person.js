import Radium from 'radium';

export const Person = (s) => {

    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };
    
    return (
    <div className="Person" style={style}>
        <p>{s.name}, {s.age} years old</p>
        <input onChange={s.onChange} key={s.id}></input>

    </div>
    )
    
}


export default Radium(Person)