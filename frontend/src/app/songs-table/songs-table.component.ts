import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import {Song} from '../Song';

@Component({
  selector: 'app-songs-table',
  templateUrl: './songs-table.component.html',
  styleUrls: ['./songs-table.component.css']
})
export class SongsTableComponent implements OnInit {
  public gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];
  public api: any;
  model: Song = new Song('', '', '', '');


  constructor(private http: HttpClient) {
    this.gridOptions = <GridOptions>{
      animateRows: true,
      defaultColDef: {
        editable: true
      },
      onCellEditingStopped: function(event) {
        http.put('http://localhost:8080/song', event.data).subscribe();
      },
      onGridReady: (params) => {
        this.reDraw();
        this.api = params.api;
        this.api.sizeColumnsToFit();
      }
    };
    this.columnDefs = [
      {headerName: '', field: 'bulk-action', width: 55, editable: false, checkboxSelection: true},
      {headerName: 'Song Name', field: 'name'},
      {headerName: 'id', field: '_id', editable: false, hide: true},
      {headerName: 'Artist', field: 'artist', filter: 'agTextColumnFilter', filterParams: {filterOptions: ['contains', 'notContains', 'startsWith','endsWith','equals']}},
      {headerName: 'Genre', field: 'genre',  filter: 'agTextColumnFilter', filterParams: {filterOptions: ['contains', 'notContains', 'startsWith','endsWith','equals']}},
      {headerName: 'length', field: 'time'}
    ];
  }
  reDraw() {
    this.http.get('http://localhost:8080/song').subscribe(data => {
      this.rowData = data as any[];
      this.api.redrawRows(this.rowData);
    });
  }
  deleteSelectedRows() {
    const selectedNodes = this.api.getSelectedNodes();
    const selectedData = selectedNodes.forEach(node => {
      this.http.request('delete', 'http://localhost:8080/song', {body: { _id: node.data._id}})
        .subscribe(() => {
          this.reDraw();
        });
    });
  }

  onSubmit() {
    this.http.post('http://localhost:8080/song/', this.model).subscribe(() => {
      this.reDraw();
    });
  }

  ngOnInit() {
  }

}
