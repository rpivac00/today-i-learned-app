# today-i-learned-app
Today I learned is a web application that contains interesting facts from different categories.

The app is built using React, it is designed with CSS and uses Supabase as the backend.

The app is deployed on Netlify: https://rpivac00-today-i-learned.netlify.app/

## Description

Different facts are fetched from the Supabase backend and rendered in the app.

Users can browse facts by category and also add their fact(s).

The fact is then uploaded to the database and it automatically renders in the app.

Users can also vote if the fact is interesting, mindblowing, or false.

If fact has a lot of false votes it will be disputed.

Added next feature:
 TheUser can make only one vote for each of the voting categories, clicking the same button again will remove the vote.

Implemented responsiveness for mobile devices.
