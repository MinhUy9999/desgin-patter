package main

type UserInterator struct {
	index int
	users []*User
}

func (u *UserInterator) hasNext() bool {
	return u.index < len(u.users)
}

func (u *UserInterator) getNext() *User {
	if u.hasNext() {
		user := u.users[u.index]
		u.index++
		return user
	}
	return nil
}
