import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-get-in-touch',
    templateUrl: './get-in-touch.component.html',
})
export class GetInTouchComponent {
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
            const form_data = this.form.value;
            const data: FormData = new FormData();

            for (const key in form_data) {
                data.set(key, form_data[key]);
            }

            this.http.post(this.url, data)
                .subscribe({
                    next: (result) => {
                        console.log(result);
                    },
                    error: (err) => {
                        console.error(err);
                    }
                })
        }
    }
}
