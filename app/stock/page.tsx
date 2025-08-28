"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, Search, AlertTriangle, CheckCircle, Clock } from "lucide-react"

// ... your StockItem interface and helper functions here ...

interface StockItem {
  id: string;
  product: string;
  category: 'Coffee Beans' | 'Milk & Dairy' | 'Pastry Ingredients' | 'Packaging' | 'Equipment';
  stockQuantity: number;
  unit: string;
  minThreshold: number;
  maxCapacity: number;
  supplier: string;
  lastRestocked: string;
  cost: number;
}

export default function StockPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState<string>("all")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  // your stockItems, getStockStatus, getStatusBadge, filteredItems logic here...
    const stockItems: StockItem[] = [
    {
      id: 'beans-001',
      product: 'Ethiopian Single Origin',
      category: 'Coffee Beans',
      stockQuantity: 45,
      unit: 'lbs',
      minThreshold: 20,
      maxCapacity: 100,
      supplier: 'Mountain Coffee Co.',
      lastRestocked: '2024-08-25',
      cost: 12.50
    },
    {
      id: 'beans-002',
      product: 'House Blend',
      category: 'Coffee Beans',
      stockQuantity: 12,
      unit: 'lbs',
      minThreshold: 15,
      maxCapacity: 80,
      supplier: 'Local Roasters',
      lastRestocked: '2024-08-20',
      cost: 9.80
    },
    {
      id: 'dairy-001',
      product: 'Whole Milk',
      category: 'Milk & Dairy',
      stockQuantity: 8,
      unit: 'gallons',
      minThreshold: 10,
      maxCapacity: 25,
      supplier: 'Fresh Valley Dairy',
      lastRestocked: '2024-08-27',
      cost: 4.20
    },
    {
      id: 'dairy-002',
      product: 'Oat Milk',
      category: 'Milk & Dairy',
      stockQuantity: 15,
      unit: 'cartons',
      minThreshold: 8,
      maxCapacity: 30,
      supplier: 'Oat Dreams Co.',
      lastRestocked: '2024-08-26',
      cost: 3.75
    },
    {
      id: 'pastry-001',
      product: 'All-Purpose Flour',
      category: 'Pastry Ingredients',
      stockQuantity: 35,
      unit: 'lbs',
      minThreshold: 25,
      maxCapacity: 50,
      supplier: 'Baker\'s Supply',
      lastRestocked: '2024-08-22',
      cost: 2.30
    },
    {
      id: 'pastry-002',
      product: 'Butter (Unsalted)',
      category: 'Pastry Ingredients',
      stockQuantity: 8,
      unit: 'lbs',
      minThreshold: 10,
      maxCapacity: 20,
      supplier: 'Premium Dairy',
      lastRestocked: '2024-08-24',
      cost: 6.50
    },
    {
      id: 'packaging-001',
      product: 'Coffee Cups (12oz)',
      category: 'Packaging',
      stockQuantity: 450,
      unit: 'units',
      minThreshold: 200,
      maxCapacity: 1000,
      supplier: 'EcoPack Solutions',
      lastRestocked: '2024-08-23',
      cost: 0.15
    },
    {
      id: 'packaging-002',
      product: 'Takeout Bags',
      category: 'Packaging',
      stockQuantity: 85,
      unit: 'units',
      minThreshold: 100,
      maxCapacity: 500,
      supplier: 'Green Packaging',
      lastRestocked: '2024-08-21',
      cost: 0.25
    },
    {
      id: 'equipment-001',
      product: 'Coffee Filters',
      category: 'Equipment',
      stockQuantity: 25,
      unit: 'boxes',
      minThreshold: 15,
      maxCapacity: 40,
      supplier: 'Brew Essentials',
      lastRestocked: '2024-08-26',
      cost: 8.90
    }
  ];
  const getStockStatus = (item: StockItem) => {
    const percentage = (item.stockQuantity / item.maxCapacity) * 100;
    if (item.stockQuantity <= item.minThreshold) return 'Low';
    if (percentage >= 80) return 'Good';
    return 'Medium';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Low':
        return <Badge variant="destructive" className="flex items-center space-x-1">
          <AlertTriangle className="h-3 w-3" />
          <span>Low</span>
        </Badge>;
      case 'Medium':
        return <Badge variant="secondary" className="flex items-center space-x-1">
          <Clock className="h-3 w-3" />
          <span>Medium</span>
        </Badge>;
      case 'Good':
        return <Badge className="flex items-center space-x-1 bg-green-100 text-green-800 hover:bg-green-100">
          <CheckCircle className="h-3 w-3" />
          <span>Good</span>
        </Badge>;
      default:
        return null;
    }
  };

  const filteredItems = stockItems.filter(item => {
    const matchesSearch = item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || getStockStatus(item) === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const lowStockCount = stockItems.filter(item => getStockStatus(item) === 'Low').length;
  const totalValue = stockItems.reduce((sum, item) => sum + (item.stockQuantity * item.cost), 0);


  

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-medium text-foreground">Stock Management</h1>
        <p className="text-muted-foreground">
          Monitor and manage your cafe's inventory levels and supplier information.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Items</p>
                <p className="text-2xl font-medium">{stockItems.length}</p>
              </div>
              <Package className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Low Stock Alerts</p>
                <p className="text-2xl font-medium text-destructive">{lowStockCount}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Inventory Value</p>
                <p className="text-2xl font-medium">${totalValue.toFixed(0)}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Categories</p>
                <p className="text-2xl font-medium">5</p>
              </div>
              <Package className="h-8 w-8 text-chart-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5" />
            <span>Inventory Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products or suppliers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-lg"
                />
              </div>
            </div>
            
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full sm:w-48 rounded-lg">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Coffee Beans">Coffee Beans</SelectItem>
                <SelectItem value="Milk & Dairy">Milk & Dairy</SelectItem>
                <SelectItem value="Pastry Ingredients">Pastry Ingredients</SelectItem>
                <SelectItem value="Packaging">Packaging</SelectItem>
                <SelectItem value="Equipment">Equipment</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-32 rounded-lg">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Good">Good</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Stock Table */}
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">Product</TableHead>
                  <TableHead className="font-medium">Category</TableHead>
                  <TableHead className="font-medium">Stock Quantity</TableHead>
                  <TableHead className="font-medium">Status</TableHead>
                  <TableHead className="font-medium">Supplier</TableHead>
                  <TableHead className="font-medium">Last Restocked</TableHead>
                  <TableHead className="font-medium text-right">Unit Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow key={item.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{item.product}</TableCell>
                    <TableCell className="text-muted-foreground">{item.category}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{item.stockQuantity} {item.unit}</span>
                        <span className="text-xs text-muted-foreground">
                          Min: {item.minThreshold} | Max: {item.maxCapacity}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(getStockStatus(item))}</TableCell>
                    <TableCell className="text-muted-foreground">{item.supplier}</TableCell>
                    <TableCell className="text-muted-foreground">{item.lastRestocked}</TableCell>
                    <TableCell className="text-right font-medium">
                      ${item.cost.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No items found matching your search criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
