package main

import (
	"fmt"
	"math"
)

type IShape interface {
	area() float64
}

type Circle struct {
	radius float64
}

func (c *Circle) area() float64 {
	return math.Pi * c.radius * c.radius
}

type Square struct {
	side int
}

func (s *Square) area() float64 {
	return float64(s.side * s.side)
}

func printArea(shape IShape) {
	fmt.Println(shape.area())
}

func main() {
	circle := Circle{radius: 3}
	printArea(&circle)

	square := Square{side: 3}
	printArea(&square)
}
