import React from 'react';
import Project from '../pages/Project';
import styleGuide from '../images/codium/style.png';
import scAbout from '../images/codium/about.png';
import scCourse from '../images/codium/course.png';
import scInstructor from '../images/codium/instructor.png';

const CodiumCode = `
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
        title: "Codium",
        shortDesc: "An online coding school website that sells online courses that teach various coding languages. The website is built for educational purposes only (not legitimate).",
        tags: ['WordPress', 'PHP', 'Sass', 'Google Analytics', 'Git'],
        featuredImg: '',
        overview: 'Codium was built with WordPress and PHP for a collaborative group project at BCIT’s Technical Web Designer program. The website is an online coding school that offers courses such as HTML, JavaScript, Python, and many more. The courses are offered in the form of videos, quizzes, and supplemental materials for students to download. In order to do that, my team and I used Woocommerce and Sensei to implement that feature. The design is professional and trustworthy but also warm and welcoming for new students.',
        responsibilities: ['Contributed in making wireframes', 'Created courses using Sensei LMS plugin', 'Connected courses to Woocommerce products', 'Developed and styled courses page' ],
        members: ['Darrien Chow', 'Tin Lau', 'Wynonna Moo', 'Tiffany Tang'],
        screenshots: [styleGuide, scAbout, scCourse, scInstructor],
        codeDesc: '',
        codeSnippets: CodiumCode,
        liveSite: 'https://codium.bcitwebdeveloper.ca',
        github: 'https://github.com/htpwebdesign/codium',
    }
]

const ProjectCodium = () => {
    return (
            <Project 
                project={projectInfo}
            />
    );
}

export default ProjectCodium;


