import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Iproduct } from '../common/product';

@Component( {
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: [ './product-list.component.scss' ]
} )

export class ProductListComponent
{
    title = 'project';
    @Input() product!: Iproduct[]
    @Output() onRemove = new EventEmitter<any>()

    removeItem ( id: number )
    {
        this.onRemove.emit( id )
    }

}
