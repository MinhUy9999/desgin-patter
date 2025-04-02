package main

import "fmt"

func main() {
	user1 := &User{
		name: "a",
		age:  30,
	}
	user2 := &User{
		name: "b",
		age:  20,
	}

	userCollection := &UserCollection{
		users: []*User{user1, user2},
	}

	interator := userCollection.createInterator()

	for interator.hasNext() {
		user := interator.getNext()
		fmt.Printf("User is: %+v\n", user)
	}
}
