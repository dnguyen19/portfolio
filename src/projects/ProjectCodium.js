import React from 'react';
import Project from '../pages/Project';
import styleGuide from '../images/codium/style.png';
import scAbout from '../images/codium/about.png';
import scCourse from '../images/codium/course.png';
import scInstructor from '../images/codium/instructor.png';

const CodiumCode = `
<?php
  $courses = get_terms([
            'taxonomy' => 'course-category', 
            'orderby' => 'name',
            'order' => 'DES',
        ]);
    
  if($courses && ! is_wp_error($courses) ){
      foreach($courses as $course){
          $args = array( 
              'post_type' => 'course',
              'posts_per_page' => -1,
              'orderby' => 'date',
              'order' => 'ASC',
              'tax_query'      => array(
                  array(
                      'taxonomy' => 'course-category',
                      'field'    => 'slug',
                      'terms'    => $course->slug, 
                  )
              ),
          );

          echo '<div class="courses-section">';
          $term_query = new WP_Query ($args);
          
          if ( $term_query->have_posts() ) {
              echo '<h2>' . $course->name . '</h2>';
              echo '<p>' . $course->description . '</p>';
              echo '<hr/>';
              while($term_query->have_posts()){
                  $term_query->the_post();
                  echo '<article class="course-item">';
                  echo '<a href="'. get_the_permalink() . '">';
                  the_post_thumbnail('course-thumbnail');
                  echo '<h3>' . get_the_title() . '</h3>';
                  echo '</a>';
                  echo '</article>';
              }//end while
              wp_reset_postdata();
              echo '</div>';
          }// end if
      }//end foreach
  }//end if
?>

`

const projectInfo = [
    {
        title: "Codium",
        shortDesc: "An online coding school website that sells online courses that teach various coding languages. The website is built for educational purposes only (not legitimate).",
        tags: ['WordPress', 'PHP', 'Sass', 'Google Analytics', 'Git'],
        featuredImg: '',
        overview: 'Codium was built with WordPress and PHP for a collaborative group project at BCIT’s Technical Web Designer program. The website is an online coding school that offers courses such as HTML, JavaScript, Python, and more. The courses are offered in the form of videos, quizzes, and supplemental materials for students to download. In order to do that, my team and I used Woocommerce and Sensei to implement that feature. The design of the website is professional and trustworthy but also warm and welcoming for new students.',
        responsibilities: ['Contributed in making wireframes', 'Created courses using Sensei LMS plugin', 'Connected courses to Woocommerce products', 'Developed and styled courses page' ],
        members: ['Darrien Chow', 'Tin Lau', 'Wynonna Moo', 'Tiffany Tang'],
        screenshots: [styleGuide, scAbout, scCourse, scInstructor],
        codeDesc: 'The code demonstrates how to organize the courses by its category using WP_Query. It is used to display on the Our Courses page.',
        codeSnippets: CodiumCode,
        liveSite: null,
        github: null,
        // liveSite: 'https://codium.bcitwebdeveloper.ca',
        // github: 'https://github.com/htpwebdesign/codium',
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


