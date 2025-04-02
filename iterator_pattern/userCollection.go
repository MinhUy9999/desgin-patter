package main

type UserCollection struct {
	users []*User
}

func (u *UserCollection) createInterator() Interator {
	return &UserInterator{
		users: u.users,
	}
}
