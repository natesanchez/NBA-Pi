# NBA-PI

The best API for for your NBA Basics! Teams, Players, Championships, and Legends!

## Endpoints

```
GET /teams
```

```
GET /championships
```

## Example

Sample result from this endpoint: http://localhost:3000/teams/bulls

```
{
  "_id": "5e604475f8efd331342dd8ef",
  "id": 5,
  "abbreviation": "CHI",
  "city": "Chicago",
  "conference": "East",
  "division": "Central",
  "founded": 1966,
  "website": "https://www.nba.com/bulls/",
  "full_name": "Chicago Bulls",
  "name": "Bulls",
  "logo": "https://content.sportslogos.net/logos/6/221/full/hj3gmh82w9hffmeh3fjm5h874.png",
  "__v": 0
}
```

## Authors

Nate Sanchez

## Technologies Used

- Node.js w/Express
- MongoDB w/Mongoose
- Heroku