# today-i-learned-app
Today I learned is a web application that contains interesting facts from different categories.

The app is built using React, it is designed with CSS and uses Supabase as backend.

App is deployed on Netlify: https://rpivac00-today-i-learned.netlify.app/

## Description

Different facts are fetched from Supabase backend and rendered in app.

Users can browse facts by category and also add their own fact.

Fact is then uploaded to database and it automatically renders in app.

Users can also vote if fact is interesting, mindblowing or false.

If fact has a lot of false votes it will be disputed.

Added next feature:
User can make only one vote for each of voting categories, clicking same button again will remove vote.

Implemented rensponsiveness for mobile devices.
