package main

type Interator interface {
	hasNext() bool
	getNext() *User
}
