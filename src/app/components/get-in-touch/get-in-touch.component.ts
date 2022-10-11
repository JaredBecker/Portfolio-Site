import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { ResponseStructure } from 'src/app/types/response.model';

@Component({
    selector: 'app-get-in-touch',
    templateUrl: './get-in-touch.component.html',
})
export class GetInTouchComponent {
    public loading: boolean = false;
    public message: string = '';
    public is_ok: boolean = false;

    public form: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        message: ['', [Validators.required]]
    });

    private url: string = `${environment.url}/contact.php`;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
    ) { }

    public submitMessage() {
        if (this.form.valid) {
            this.loading = true;
            const form_data = this.form.value;
            const data: FormData = new FormData();

            for (const key in form_data) {
                data.set(key, form_data[key]);
            }

            this.http.post<ResponseStructure>(this.url, data)
                .subscribe({
                    next: (result) => {
                        this.loading = false;
                        this.message = result['message'];
                        this.is_ok = result['is_ok'];
                    },
                    error: (res) => {
                        this.loading = false;
                        this.message = res['message'];
                        this.is_ok = res['is_ok'];
                    }
                })
        }
    }
}
