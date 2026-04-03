"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Pencil, Trash2, X } from "lucide-react"
import { products as initialProducts, Product, formatPrice } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const categories = ["Oriental", "Floral", "Fresh", "Woody", "Musk"]

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
    stock: "",
    topNotes: "",
    middleNotes: "",
    baseNotes: "",
  })

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      image: "",
      category: "",
      description: "",
      stock: "",
      topNotes: "",
      middleNotes: "",
      baseNotes: "",
    })
    setEditingProduct(null)
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      price: product.price.toString(),
      image: product.image,
      category: product.category,
      description: product.description,
      stock: product.stock.toString(),
      topNotes: product.notes.top.join(", "),
      middleNotes: product.notes.middle.join(", "),
      baseNotes: product.notes.base.join(", "),
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (productId: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== productId))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newProduct: Product = {
      id: editingProduct?.id || Date.now().toString(),
      name: formData.name,
      price: parseInt(formData.price),
      image: formData.image,
      category: formData.category,
      description: formData.description,
      stock: parseInt(formData.stock),
      notes: {
        top: formData.topNotes.split(",").map((n) => n.trim()),
        middle: formData.middleNotes.split(",").map((n) => n.trim()),
        base: formData.baseNotes.split(",").map((n) => n.trim()),
      },
    }

    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? newProduct : p)))
    } else {
      setProducts([...products, newProduct])
    }

    setIsDialogOpen(false)
    resetForm()
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-3xl mb-2">Products</h1>
          <p className="text-muted-foreground">Manage your perfume inventory</p>
        </div>
        <Button
          onClick={() => {
            resetForm()
            setIsDialogOpen(true)
          }}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">All Products ({products.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Image</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Category</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Price</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Stock</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-border last:border-0">
                    <td className="py-3 px-4">
                      <div className="relative h-12 w-10 rounded overflow-hidden bg-secondary">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                          {product.description}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{product.category}</td>
                    <td className="py-3 px-4 text-sm font-medium">{formatPrice(product.price)}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.stock < 20 ? "bg-red-100 text-red-800" :
                        product.stock < 40 ? "bg-yellow-100 text-yellow-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {product.stock} in stock
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(product)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(product.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add/Edit Product Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </DialogTitle>
            <DialogDescription>
              {editingProduct ? "Update the product details below." : "Fill in the details for your new perfume."}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Midnight Oud"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="A captivating blend of..."
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (PKR)</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="12500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input
                  id="stock"
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  placeholder="25"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Fragrance Notes</h3>
              <div className="space-y-2">
                <Label htmlFor="topNotes">Top Notes (comma separated)</Label>
                <Input
                  id="topNotes"
                  value={formData.topNotes}
                  onChange={(e) => setFormData({ ...formData, topNotes: e.target.value })}
                  placeholder="Saffron, Cardamom"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="middleNotes">Middle Notes (comma separated)</Label>
                <Input
                  id="middleNotes"
                  value={formData.middleNotes}
                  onChange={(e) => setFormData({ ...formData, middleNotes: e.target.value })}
                  placeholder="Rose, Oud"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="baseNotes">Base Notes (comma separated)</Label>
                <Input
                  id="baseNotes"
                  value={formData.baseNotes}
                  onChange={(e) => setFormData({ ...formData, baseNotes: e.target.value })}
                  placeholder="Amber, Musk, Sandalwood"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {editingProduct ? "Update Product" : "Add Product"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
