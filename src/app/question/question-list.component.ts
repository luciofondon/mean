import { Component } from '@angular/core';
import { Question } from './question.model';

const q = new Question(
    '¿Cómo se resuelve?',
    'Esta es la pregunta',
    new Date(),
    'devicon-android-plain'
);

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styles: [`
        i: {
            font-size: 48px;
        }

        i.help {
            width: 48px !important;
            height: 48px !important;
            padding: 48px !important;
            font-size: 48px !important;
        }

        .add-question {
            position: fixed;
            botton: 30px;
            right: 30px;
            font-size: 24px;
        }
    `]
})

export class QuestionListComponent {
    questions: Question[] = new Array(10).fill(q);
}
