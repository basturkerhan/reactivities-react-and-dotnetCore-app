import { observer } from 'mobx-react-lite';
import React from 'react'
import { Card, Grid, Header, Tab } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import ProfileCard from './ProfileCard';

export const ProfileFollowings = () => {
    const {profileStore:{profile, activeTab, followings,loadingFollowings}} = useStore();

    return (
    <Tab.Pane loading={loadingFollowings}>
        <Grid>
            <Grid.Column width={16}>
                <Header 
                    floated="left" 
                    icon="user" 
                    content={
                        activeTab===3 
                        ? `People following ${profile?.displayName}`
                        : `${profile?.displayName} is following people`
                    } />

            </Grid.Column>
            <Grid.Column width={16}>
                <Card.Group itemsPerRow={4}>
                    {
                        followings.map(profile=>(
                            <ProfileCard 
                                key={profile.username}
                                profile={profile}
                            />
                        ))
                    }
                </Card.Group>
            </Grid.Column>
        </Grid>
    </Tab.Pane>
  )
}

export default observer(ProfileFollowings);
