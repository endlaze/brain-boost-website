import { Component, OnInit, ElementRef } from '@angular/core';
import { FAQService } from '../../services/faq-service/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})

export class FAQComponent implements OnInit {
  faq: any = []

  constructor(private faqService: FAQService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.getFAQ()
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f1f1ef';
  }

  getFAQ = () => {
    this.faqService.getFAQ().subscribe(res => {
      this.faq = this.formatFAQ(res)
    })
  }

  formatFAQ = (faq) => {
    return faq.map((question, index) => {
      question['selected'] = false
      question['id'] = 'question-' + index
      return question
    })
  }

  toggleQuestion = (questionId) => {
    this.faq.forEach(question => {
      question.selected = (question.id === questionId) ? (!question.selected) : false
    });
  }
}
