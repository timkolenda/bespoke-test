/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const express = require('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let members = [
  {
    'id': 1,
    'name': 'Leanne Graham',
    'age': 32,
    'rating': 1,
    'activities': ['biking', 'running', 'hiking' ]
  },
  {
    'id': 2,
    'name': 'Ervin Howell',
    'age': 43,
    'rating': 2,
    'activities': ['biking', 'biking', 'biking' ]
  },
  {
    'id': 3,
    'name': 'Clementine Bauch',
    'age': 54,
    'rating': 3,
    'activities': ['hiking', 'hiking', 'hiking' ]
  },
  {
    'id': 4,
    'name': 'Patricia Lebsack',
    'age': 33,
    'rating': 4,
    'activities': ['running', 'running', 'running']    
  },
  {
    'id': 5,
    'name': 'Chelsey Dietrich',
    'age': 57,
    'rating':51,
    'activities': ['running', 'running', 'hiking' ]
  },
  {
    'id': 6,
    'name': 'Mrs. Dennis Schulist',
    'age': 22,
    'rating': 6,
    'activities': ['hiking', 'running', 'hiking' ]
  },
  {
    'id': 7,
    'name': 'Kurtis Weissnat',
    'age': 27,
    'rating': 7,
    'activities': ['biking', 'biking', 'hiking' ]
  },
  {
    'id': 8,
    'name': 'Nicholas Runolfsdottir V',
    'age': 28,
    'rating': 8,
    'activities': ['hiking', 'biking', 'hiking' ]
  },
  {
    'id': 9,
    'name': 'Glenna Reichert',
    'age': 65,
    'rating': 9,
    'activities': ['hiking', 'running', 'biking' ]
  },
  {
    'id': 10,
    'name': 'Clementina DuBuque',
    'age': 48,
    'rating': 1,
    'activities': ['running', 'biking', 'running' ]
  },
  {
    'id': 11,
    'name': 'Clementina DuBuque',
    'age': 48,
    'rating': 1,
    'activities': ['running', 'biking', 'running' ]
  }
]

app.get('/members', (req, res) => {
    res.json(members);
});

app.delete('/members/:id', (req, res) => {
  const { id } = req.params;
  const remove = members.find(member => member.id === parseInt(id));
  if (remove) {
    members = members.filter(member => ( member.id !== parseInt(id) ));
  }
  res.status(200).json(remove)
});


app.get('/', (req,  res) => {
    res.send('Express here');
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});