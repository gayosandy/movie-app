import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtEmbedComponent } from './yt-embed.component';

describe('YtEmbedComponent', () => {
  let component: YtEmbedComponent;
  let fixture: ComponentFixture<YtEmbedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YtEmbedComponent]
    });
    fixture = TestBed.createComponent(YtEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
