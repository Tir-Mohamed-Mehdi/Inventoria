import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataInterface } from '../adminFiles/adminModels';
import { ProductService } from '../adminServices/product.service';

@Component({
  selector: 'app-admin-stock',
  templateUrl: './admin-stock.component.html',
  styleUrls: ['./admin-stock.component.scss'],
})
export class AdminStockComponent implements OnInit {
  constructor(private PRODUCTS: ProductService) {}

  displayedColumns: string[] = columns;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: any;

  ngOnInit(): void {
    this.PRODUCTS.getAllProducts().subscribe((data) => {
      console.log(data);

      this.dataSource = new MatTableDataSource<DataInterface>(data.data);
      this.dataSource.paginator = this.paginator;
    });
  }
}

const columns: string[] = [
  'code',
  'name',
  'category',
  'quantity',
  'buyPrice',
  'sellePrice',
  'minQuantityForSale',
  'blocked',
];
