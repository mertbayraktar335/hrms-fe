import React from 'react'
import CandidateList from '../pages/CandidateList'
import { Route } from 'react-router'
import EmployerList from '../pages/EmployerList'
import JobAdvertiseList from '../pages/JobAdvertiseList'
import JobPositionList from '../pages/JobPositionList'
import Home from '../pages/Home';
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <   Grid>
                <Grid.Column width={16}>
                    <Route exact path="/candidates" component={CandidateList} />
                    <Route exact path="/employers" component={EmployerList} />
                    <Route exact path="/jobAdvertises" component={JobAdvertiseList} />
                    <Route exact path="/jobPositions" component={JobPositionList} />
                    <Route exact path="/" component={Home} />
                </Grid.Column>
                </Grid>

        </div>










    )
}
