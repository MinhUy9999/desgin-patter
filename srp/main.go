package main

import "fmt"

type Item struct {
	name  string
	price int
}

type Invoice struct {
	items []Item
}

func NewInvoice(items []Item) Invoice {
	return Invoice{items: items}
}

func (i *Invoice) CalculateTotal() int {
	total := 0
	for _, item := range i.items {
		total += item.price
	}
	return total
}

type InvoicePrinter struct{}

func (ip *InvoicePrinter) PrintBill(invoice Invoice) {
	fmt.Printf("Total bill is: %d\n", invoice.CalculateTotal())
}

type InvoiceSaver struct{}

func (is *InvoiceSaver) SaveBill(invoice Invoice) {
	fmt.Print("Saved bill into database")
}

func main() {
	items := []Item{
		{name: "Gà nướng", price: 40000},
		{name: "Bia Tiger", price: 20000},
	}
	invoice := NewInvoice(items)

	Printer := InvoicePrinter{}
	Printer.PrintBill(invoice)

	Database := InvoiceSaver{}
	Database.SaveBill(invoice)
}
