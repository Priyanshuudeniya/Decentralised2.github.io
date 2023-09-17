import React, { useState } from 'react';

function App() {
  const [candidates, setCandidates] = useState([
    { name: 'Priyanshu Udeniya'},
    { name: 'Deepraj Kushwaha'},
    { name: 'Deepraj Kushwaha'},
    { name: 'Ayush Sharma'},
  ]);
  
  


  const handleVoteClick = (index) => {
    const updatedCandidates = candidates.map((candidate, i) => ({
      ...candidate,
      votes: i === index ? 1 : candidate.votes,
    }));
    setCandidates(updatedCandidates);
  };

 

  return (
    <div>
  <p>


<br></br>

<br></br>

<br>
</br>
<br></br>
<br></br>

<br></br>

  </p>

      <h1 className="connected-header">You are Connected to Metamask</h1>
      <p className="connected-account">Metamask Account: 0xeAC87e7C3ec1F3e65c2a54CdD9cBB0132cb60d19{useState.account}</p>
      <p className="connected-account">Remaining Time: {useState.remainingTime}</p>
      { useState.showButton ? (
                <p className="connected-account">You have already voted</p>
            ) : (
                <div>
                   <center> <input type="number" placeholder="Entern Candidate Index" value={useState.number} onChange={useState.handleNumberChange}></input>
            <br />
            <button className="login-button" onClick={useState.voteFunction}>Vote</button>
</center>
<br></br>
                </div>
            )}



<table id="myTable" className="candidates-table table table-striped container">
        <thead>
          <tr>
            <th>Index</th>
            <th>Candidate Name</th>
            <th>Candidate Vote</th>
            <th>vclick</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{candidate.name}</td>
              <td>{candidate.votes}
              <td>0</td>
          
              </td>
              <td>
                <button onClick={() => handleVoteClick(index)}>vclick</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default App;
