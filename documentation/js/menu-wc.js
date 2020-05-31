'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">souvenirs-hub documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f7002f18f8d7adef2a04856977846d52"' : 'data-target="#xs-components-links-module-AppModule-f7002f18f8d7adef2a04856977846d52"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f7002f18f8d7adef2a04856977846d52"' :
                                            'id="xs-components-links-module-AppModule-f7002f18f8d7adef2a04856977846d52"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreMaterialModule.html" data-type="entity-link">CoreMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-a809b123db2a4303b637f344d6ab8ae3"' : 'data-target="#xs-components-links-module-CoreModule-a809b123db2a4303b637f344d6ab8ae3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-a809b123db2a4303b637f344d6ab8ae3"' :
                                            'id="xs-components-links-module-CoreModule-a809b123db2a4303b637f344d6ab8ae3"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeMaterialModule.html" data-type="entity-link">HomeMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-6df68fb918d30f69257ca8ed87ce6aa7"' : 'data-target="#xs-components-links-module-HomeModule-6df68fb918d30f69257ca8ed87ce6aa7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-6df68fb918d30f69257ca8ed87ce6aa7"' :
                                            'id="xs-components-links-module-HomeModule-6df68fb918d30f69257ca8ed87ce6aa7"' }>
                                            <li class="link">
                                                <a href="components/CreateUpdatePostComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateUpdatePostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedMaterialModule.html" data-type="entity-link">SharedMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-dfb614f4cf255b812e5db03a09d66408"' : 'data-target="#xs-components-links-module-SharedModule-dfb614f4cf255b812e5db03a09d66408"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-dfb614f4cf255b812e5db03a09d66408"' :
                                            'id="xs-components-links-module-SharedModule-dfb614f4cf255b812e5db03a09d66408"' }>
                                            <li class="link">
                                                <a href="components/CommentActionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommentActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommentCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommentCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomSnackbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomSnackbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuOptionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuOptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NameInitialComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NameInitialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostCollectionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostCollectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostWrapperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostWrapperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-dfb614f4cf255b812e5db03a09d66408"' : 'data-target="#xs-pipes-links-module-SharedModule-dfb614f4cf255b812e5db03a09d66408"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-dfb614f4cf255b812e5db03a09d66408"' :
                                            'id="xs-pipes-links-module-SharedModule-dfb614f4cf255b812e5db03a09d66408"' }>
                                            <li class="link">
                                                <a href="pipes/CharacterCountPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CharacterCountPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TrashMaterialModule.html" data-type="entity-link">TrashMaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TrashModule.html" data-type="entity-link">TrashModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TrashModule-b1d5b44a8dec3340aecd472a549d8e3a"' : 'data-target="#xs-components-links-module-TrashModule-b1d5b44a8dec3340aecd472a549d8e3a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TrashModule-b1d5b44a8dec3340aecd472a549d8e3a"' :
                                            'id="xs-components-links-module-TrashModule-b1d5b44a8dec3340aecd472a549d8e3a"' }>
                                            <li class="link">
                                                <a href="components/CommentTrashComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommentTrashComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostTrashComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostTrashComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrashComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrashComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TrashRoutingModule.html" data-type="entity-link">TrashRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuOptionsConfig.html" data-type="entity-link">MenuOptionsConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/NavbarConfig.html" data-type="entity-link">NavbarConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/RichTextEditorConfig.html" data-type="entity-link">RichTextEditorConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/SnackbarConfig.html" data-type="entity-link">SnackbarConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/TrashTabConfig.html" data-type="entity-link">TrashTabConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utility.html" data-type="entity-link">Utility</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EventListenerService.html" data-type="entity-link">EventListenerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpService.html" data-type="entity-link">HttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MockDataService.html" data-type="entity-link">MockDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedDataService.html" data-type="entity-link">SharedDataService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link">Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmittedMenuSelection.html" data-type="entity-link">EmittedMenuSelection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Navbar.html" data-type="entity-link">Navbar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostRequest.html" data-type="entity-link">PostRequest</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});