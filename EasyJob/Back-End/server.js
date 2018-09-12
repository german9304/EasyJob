const express = require("express");
const app = express();


app.use(express.json());

app.get('/user', (req, res) => {
	const user = {
		username: 'test',
		email: "test@email"
	}
	res.json(user);
})

app.post('/api', (req, res) => {
	const {body: user} = req;
	console.log(user)
	res.json(user)

})

app.listen(3000, () => console.log('app listening on port 3000!'))