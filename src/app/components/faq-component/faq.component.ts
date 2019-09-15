import { Component, OnInit } from '@angular/core';
import { FAQService } from '../../services/faq-service/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['../../../assets/styles/common-styles.less']
})

export class FAQComponent implements OnInit {
  faq: any = []

  constructor(private faqService: FAQService) { }

  ngOnInit() {
    this.getFAQ()
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
