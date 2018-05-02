# Solar Carbon Tracker - Front End
link to [back end](https://github.com/abarnes26/solar_tracker_back)

## Goal of this Project
- Create an easy to use and intuitive interface for solar installers to use.
- Learn proficiency with React and proper component usage.
- Incorporate graph rendering for carbon impact that will update in real time.

## Description

This application provides solar installation business owners with an easy to manage collection of solar projects and equipment.

## About the data

When a user submits a project, the back-end api uses the location data to extrapolate the local solar information and calculates lifetime analysis of the system.  Additionally, the carbon impact from driving is calculated using the round trip miles between the project location and branch and mpg of the vehicle used.

## Displaying Impact

As solar projects are marked as 'Complete', the total carbon impact of the project is calculated and displayed on easy to read graphs.  The information shows includes what the solar impact would be generating that amount of power without solar, as well as the carbon payback over a 5 year period.

## Future Additions

- Implement Authentication using JSON Web Tokens.
- Create index page for viewing all projects based on current status.
- Incorporate carbon impact data for inverters.

## Author 

Alex Barnes - [github](https://github.com/abarnes26)
