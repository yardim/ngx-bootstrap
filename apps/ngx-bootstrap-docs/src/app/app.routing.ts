import { Routes } from '@angular/router';
import { LandingComponent } from '@ngx-bootstrap-doc/docs';
import { DocumentationComponent } from '@ngx-bootstrap-doc/docs';
import { DiscoverComponent } from '@ngx-bootstrap-doc/docs';
import { SchematicsComponent } from '@ngx-bootstrap-doc/docs';

export const routes: Routes = [
  {
    path: '',
    data: ['Landing page'],
    component: LandingComponent
  },
  {
    path: 'documentation',
    data: ['Documentation', {sideBarParentTitle: 'documentation'}],
    component: DocumentationComponent
  },
  {
    path: 'discover',
    data: ['Discover', {sideBarParentTitle: 'documentation'}],
    component: DiscoverComponent
  },
  {
    path: 'schematics',
    data: ['Schematics', {sideBarParentTitle: 'documentation'}],
    component: SchematicsComponent
  },
  {
    path: 'components',
    children: [
      {
        path: '',
        data: ['Components'],
        component: SchematicsComponent
      },
      {
        path: 'accordion',
        data: ['Accordion', {moduleName: 'AccordionModule', moduleFolder: 'accordion', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/accordion').then(m => m.DemoAccordionModule)
      },
      {
        path: 'alerts',
        data: ['Alerts', {moduleName: 'AlertModule', moduleFolder: 'alert', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/alerts').then(m => m.DemoAlertsModule)
      },
      {
        path: 'buttons',
        data: ['Buttons', {moduleName: 'ButtonsModule', moduleFolder: 'buttons', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/buttons').then(m => m.DemoButtonsModule)
      },
      {
        path: 'carousel',
        data: ['Carousel', {moduleName: 'CarouselModule', moduleFolder: 'carousel', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/carousel').then(m => m.DemoCarouselModule)
      },
      {
        path: 'collapse',
        data: ['Collapse', {moduleName: 'CollapseModule', moduleFolder: 'collapse', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/collapse').then(m => m.DemoCollapseModule)
      },
      {
        path: 'datepicker',
        data: ['Datepicker', {moduleName: 'BsDatepickerModule', moduleFolder: 'datepicker', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/datepicker').then(m => m.DemoDatepickerModule)
      },
      {
        path: 'dropdowns',
        data: ['Dropdowns', {moduleName: 'BsDropdownModule', moduleFolder: 'dropdown', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/dropdown').then(m => m.DemoDropdownModule)
      },

      {
        path: 'modals',
        data: ['Modals', {moduleName: 'ModalModule', moduleFolder: 'modal', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/modal').then(m => m.DemoModalModule)
      },
      {
        path: 'pagination',
        data: ['Pagination', {moduleName: 'PaginationModule', moduleFolder: 'pagination', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/pagination').then(m => m.DemoPaginationModule)
      },
      {
        path: 'popover',
        data: ['Popover', {moduleName: 'PopoverModule', moduleFolder: 'popover', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/popover').then(m => m.DemoPopoverModule)
      },
      {
        path: 'progressbar',
        data: ['Progressbar', {moduleName: 'ProgressbarModule', moduleFolder: 'progressbar', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/progressbar').then(m => m.DemoProgressbarModule)
      },
      {
        path: 'rating',
        data: ['Rating', {moduleName: 'RatingModule', moduleFolder: 'rating', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/rating').then(m => m.DemoRatingModule)
      },
      {
        path: 'sortable',
        data: ['Sortable', {moduleName: 'SortableModule', moduleFolder: 'sortable', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/sortable').then(m => m.DemoSortableModule)
      },
      {
        path: 'tabs',
        data: ['Tabs', {moduleName: 'TabsModule', moduleFolder: 'tabs', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/tabs').then(m => m.DemoTabsModule)
      },
      {
        path: 'timepicker',
        data: ['Timepicker', {moduleName: 'TimepickerModule', moduleFolder: 'timepicker', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/timepicker').then(m => m.DemoTimepickerModule)
      },
      {
        path: 'tooltip',
        data: ['Tooltip', {moduleName: 'TooltipModule', moduleFolder: 'tooltip', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/tooltip').then(m => m.DemoTooltipModule)
      },
      {
        path: 'typeahead',
        data: ['Typeahead', {moduleName: 'TypeaheadModule', moduleFolder: 'typeahead', sideBarParentTitle: 'components'}],
        loadChildren: () => import('@ngx-bootstrap-doc/typeahead').then(m => m.DemoTypeaheadModule)
      }
    ]},
  {
    path: '**',
    redirectTo: '/'
  }
];
