import React,{useState} from 'react'

function FortuneTeller() {
    const [value, setValue] = useState('');
    const [randomIndex, setRandomIndex] = useState(null)
    const handleOnChange = (e) => {
      setValue(e.target.value)
    }
    const ask = () => {
      console.log("ask")
      const result = Math.floor(Math.random() * 20)
      setRandomIndex(result)
      setValue('')
    }
    console.log(value);
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[randomIndex]
    return (
      <div>
        <h1>I'm a fortune teller.Ask me any question...</h1>
        <input value={value} onChange={handleOnChange} placeholder='Type here...'/>
        <br />
        <button onClick={ask} style={{ backgroundColor: "red", color: "white", padding: "5px 25px", marginTop: "10px" }}>Ask</button>
        <h2>Result:</h2><strong>{answer}</strong>
      </div>
    );
}

export default FortuneTeller