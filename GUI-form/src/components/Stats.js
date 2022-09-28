import { Button } from '@mui/material';

  
  const Stats = ({
        currentStep,
        firstStep,
        goToStep,
        lastStep,
        nextStep,
        previousStep,
        totalSteps,
        step,
      }) => (
        <div>
            { step > 1 &&
                <Button variant="contained" onClick={()=> {
                  previousStep();
                }} >Go back</Button>
            }
           
            { step < totalSteps ?
                <Button variant="contained" onClick={nextStep}>Continue</Button>
                :
                <Button variant="contained" onClick={nextStep}>Finish</Button>
                
            }
            <div style={{ fontSize: '21px', fontWeight: '200' }}>
                <h4>Other Functions</h4>
                <div>Current Step: {currentStep}</div>
                <div>Total Steps: {totalSteps}</div>
                <button className='btn btn-block btn-default' onClick={firstStep}>First Step</button>
                <button className='btn btn-block btn-default' onClick={lastStep}>Last Step</button>
                <button className='btn btn-block btn-default' onClick={() => goToStep(2)}>Go to Step 2</button>
            </div>
        </div>
      );

export default Stats;