import React from 'react';
import Project from '../pages/Project';
import MyFitPlannerImg from '../images/myfitplanner/myfitplanner.png';
import MyFitPlannerSc from '../images/myfitplanner/screenshots-myfitplanner.png';

const MyFitPlannerCode = `
export default class ListItem extends Component {

    static navigationOptions={
        title:'Workouts',
        headerStyle:{
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontWeight: 'bold',
        },
    }

    state = {
        items:[],
        keys:[]
    }

    componentDidMount(){ 

      const currentUser = firebase.auth();
      let userID = currentUser.currentUser.uid;

      //// correct syntax is $ {userID}
      let itemsRef = firebase.database().ref('users/{userID}/items');

        itemsRef.on('value', (snapshot) => { 
          
          // check if items are empty, else get data and display
          if (snapshot.val() == null) {
            let data = 0
            let items = Object.values(data);
            this.setState({items: 0})
            this.setState({keys: 0})
            return(
              console.log("no items")
            )
          } else {
            let data = snapshot.val();
            let keys = Object.keys(data);
            let items = Object.values(data);
            this.setState({items})
            this.setState({keys})
          }
        });
    } 

  render() {
    if (this.state.items.length == 0) {
      return (
        <Text style={styles.loading}>Loading Workout Log...</Text>
      );
    }
    return (
        <View style={styles.container}>
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} keys={this.state.keys}/>
        ) : (
          <Text style={styles.loading}>No Workouts</Text>
        )}
      </View>
    )
  }
}
`

const projectInfo = [
    {
        title: "MyFitPlanner",
        shortDesc: "A mobile application that lets you plan out your workouts. Includes a login system, create workout logs, and GPS to locate the nearest gym around you.",
        tags: ['React Native', 'Firebase', 'Expo', 'Google Maps API', 'Git'],
        featuredImg: MyFitPlannerImg,
        overview: 'MyFitPlanner was built with React Native and Firebase for a collaborative group project at Computer Information Technology at BCIT. MyFitPlanner is a fitness mobile application that lets you plan out and keep track of your workouts.  After completion, the MyFitPlanner is now available on Google Play.',
        responsibilities: ['Creating the homepage', 'Reading entries from input and adding it to Firebase', 'Fetching and displaying workout logs from Firebase', 'Adding and deleteing worklog logs'],
        members: ['Bakr Al-Humaimidi', 'Wai-Kit Ng'],
        screenshots: [MyFitPlannerSc],
        codeDesc: 'One of the components I developed is the List Item where it fetched and rendered their workout logs they inputed.',
        codeSnippets: MyFitPlannerCode,
        liveSite: 'https://play.google.com/store/apps/details?id=com.techatservice.myfitplanner',
        github: 'https://github.com/dnguyen19/fitness-planner',
    }
]

const ProjectMyFitPlanner = () => {
    return (
            <Project 
                project={projectInfo}
            />
    );
}

export default ProjectMyFitPlanner;


