import path from 'path';

export const THEME_PRESETS = ['aura', 'lara', 'nora'];

/* @todo: Refactor alias: https://github.com/rollup/plugins/tree/master/packages/alias#regular-expression-aliases */

const STYLE_ALIAS = {
    'primevue/base/style': path.resolve(__dirname, './components/lib/base/style/BaseStyle.js'),
    'primevue/basecomponent/style': path.resolve(__dirname, './components/lib/basecomponent/style/BaseComponentStyle.js'),
    'primevue/accordion/style': path.resolve(__dirname, './components/lib/accordion/style/AccordionStyle.js'),
    'primevue/accordionpanel/style': path.resolve(__dirname, './components/lib/accordionpanel/style/AccordionPanelStyle.js'),
    'primevue/accordionheader/style': path.resolve(__dirname, './components/lib/accordionheader/style/AccordionHeaderStyle.js'),
    'primevue/accordioncontent/style': path.resolve(__dirname, './components/lib/accordioncontent/style/AccordionContentStyle.js'),
    'primevue/accordiontab/style': path.resolve(__dirname, './components/lib/accordiontab/style/AccordionTabStyle.js'),
    'primevue/animateonscroll/style': path.resolve(__dirname, './components/lib/animateonscroll/style/AnimateOnScrollStyle.js'),
    'primevue/autocomplete/style': path.resolve(__dirname, './components/lib/autocomplete/style/AutoCompleteStyle.js'),
    'primevue/avatar/style': path.resolve(__dirname, './components/lib/avatar/style/AvatarStyle.js'),
    'primevue/avatargroup/style': path.resolve(__dirname, './components/lib/avatargroup/style/AvatarGroupStyle.js'),
    'primevue/badge/style': path.resolve(__dirname, './components/lib/badge/style/BadgeStyle.js'),
    'primevue/badgedirective/style': path.resolve(__dirname, './components/lib/badgedirective/style/BadgeDirectiveStyle.js'),
    'primevue/baseicon/style': path.resolve(__dirname, './components/lib/baseicon/style/BaseIconStyle.js'),
    'primevue/blockui/style': path.resolve(__dirname, './components/lib/blockui/style/BlockUIStyle.js'),
    'primevue/breadcrumb/style': path.resolve(__dirname, './components/lib/breadcrumb/style/BreadcrumbStyle.js'),
    'primevue/button/style': path.resolve(__dirname, './components/lib/button/style/ButtonStyle.js'),
    'primevue/buttongroup/style': path.resolve(__dirname, './components/lib/buttongroup/style/ButtonGroupStyle.js'),
    'primevue/calendar/style': path.resolve(__dirname, './components/lib/calendar/style/CalendarStyle.js'),
    'primevue/card/style': path.resolve(__dirname, './components/lib/card/style/CardStyle.js'),
    'primevue/carousel/style': path.resolve(__dirname, './components/lib/carousel/style/CarouselStyle.js'),
    'primevue/cascadeselect/style': path.resolve(__dirname, './components/lib/cascadeselect/style/CascadeSelectStyle.js'),
    'primevue/chart/style': path.resolve(__dirname, './components/lib/chart/style/ChartStyle.js'),
    'primevue/checkbox/style': path.resolve(__dirname, './components/lib/checkbox/style/CheckboxStyle.js'),
    'primevue/chip/style': path.resolve(__dirname, './components/lib/chip/style/ChipStyle.js'),
    'primevue/chips/style': path.resolve(__dirname, './components/lib/chips/style/ChipsStyle.js'),
    'primevue/colorpicker/style': path.resolve(__dirname, './components/lib/colorpicker/style/ColorPickerStyle.js'),
    'primevue/column/style': path.resolve(__dirname, './components/lib/column/style/ColumnStyle.js'),
    'primevue/columngroup/style': path.resolve(__dirname, './components/lib/columngroup/style/ColumnGroupStyle.js'),
    'primevue/confirmdialog/style': path.resolve(__dirname, './components/lib/confirmdialog/style/ConfirmDialogStyle.js'),
    'primevue/confirmpopup/style': path.resolve(__dirname, './components/lib/confirmpopup/style/ConfirmPopupStyle.js'),
    'primevue/contextmenu/style': path.resolve(__dirname, './components/lib/contextmenu/style/ContextMenuStyle.js'),
    'primevue/datatable/style': path.resolve(__dirname, './components/lib/datatable/style/DataTableStyle.js'),
    'primevue/dataview/style': path.resolve(__dirname, './components/lib/dataview/style/DataViewStyle.js'),
    'primevue/datepicker/style': path.resolve(__dirname, './components/lib/datepicker/style/DatePickerStyle.js'),
    'primevue/deferredcontent/style': path.resolve(__dirname, './components/lib/deferredcontent/style/DeferredContentStyle.js'),
    'primevue/dialog/style': path.resolve(__dirname, './components/lib/dialog/style/DialogStyle.js'),
    'primevue/divider/style': path.resolve(__dirname, './components/lib/divider/style/DividerStyle.js'),
    'primevue/dock/style': path.resolve(__dirname, './components/lib/dock/style/DockStyle.js'),
    'primevue/drawer/style': path.resolve(__dirname, './components/lib/drawer/style/DrawerStyle.js'),
    'primevue/dropdown/style': path.resolve(__dirname, './components/lib/dropdown/style/DropdownStyle.js'),
    'primevue/dynamicdialog/style': path.resolve(__dirname, './components/lib/dynamicdialog/style/DynamicDialogStyle.js'),
    'primevue/editor/style': path.resolve(__dirname, './components/lib/editor/style/EditorStyle.js'),
    'primevue/fieldset/style': path.resolve(__dirname, './components/lib/fieldset/style/FieldsetStyle.js'),
    'primevue/floatlabel/style': path.resolve(__dirname, './components/lib/floatlabel/style/FloatLabelStyle.js'),
    'primevue/fileupload/style': path.resolve(__dirname, './components/lib/fileupload/style/FileUploadStyle.js'),
    'primevue/focustrap/style': path.resolve(__dirname, './components/lib/focustrap/style/FocusTrapStyle.js'),
    'primevue/galleria/style': path.resolve(__dirname, './components/lib/galleria/style/GalleriaStyle.js'),
    'primevue/image/style': path.resolve(__dirname, './components/lib/image/style/ImageStyle.js'),
    'primevue/iconfield/style': path.resolve(__dirname, './components/lib/iconfield/style/IconFieldStyle.js'),
    'primevue/inlinemessage/style': path.resolve(__dirname, './components/lib/inlinemessage/style/InlineMessageStyle.js'),
    'primevue/inplace/style': path.resolve(__dirname, './components/lib/inplace/style/InplaceStyle.js'),
    'primevue/inputchips/style': path.resolve(__dirname, './components/lib/inputchips/style/InputChipsStyle.js'),
    'primevue/inputgroup/style': path.resolve(__dirname, './components/lib/inputgroup/style/InputGroupStyle.js'),
    'primevue/inputgroupaddon/style': path.resolve(__dirname, './components/lib/inputgroupaddon/style/InputGroupAddonStyle.js'),
    'primevue/inputicon/style': path.resolve(__dirname, './components/lib/inputicon/style/InputIconStyle.js'),
    'primevue/inputmask/style': path.resolve(__dirname, './components/lib/inputmask/style/InputMaskStyle.js'),
    'primevue/inputnumber/style': path.resolve(__dirname, './components/lib/inputnumber/style/InputNumberStyle.js'),
    'primevue/inputotp/style': path.resolve(__dirname, './components/lib/inputotp/style/InputOtpStyle.js'),
    'primevue/inputswitch/style': path.resolve(__dirname, './components/lib/inputswitch/style/InputSwitchStyle.js'),
    'primevue/inputtext/style': path.resolve(__dirname, './components/lib/inputtext/style/InputTextStyle.js'),
    'primevue/knob/style': path.resolve(__dirname, './components/lib/knob/style/KnobStyle.js'),
    'primevue/listbox/style': path.resolve(__dirname, './components/lib/listbox/style/ListboxStyle.js'),
    'primevue/megamenu/style': path.resolve(__dirname, './components/lib/megamenu/style/MegaMenuStyle.js'),
    'primevue/menu/style': path.resolve(__dirname, './components/lib/menu/style/MenuStyle.js'),
    'primevue/menubar/style': path.resolve(__dirname, './components/lib/menubar/style/MenubarStyle.js'),
    'primevue/message/style': path.resolve(__dirname, './components/lib/message/style/MessageStyle.js'),
    'primevue/metergroup/style': path.resolve(__dirname, './components/lib/metergroup/style/MeterGroupStyle.js'),
    'primevue/multiselect/style': path.resolve(__dirname, './components/lib/multiselect/style/MultiSelectStyle.js'),
    'primevue/orderlist/style': path.resolve(__dirname, './components/lib/orderlist/style/OrderListStyle.js'),
    'primevue/organizationchart/style': path.resolve(__dirname, './components/lib/organizationchart/style/OrganizationChartStyle.js'),
    'primevue/overlaybadge/style': path.resolve(__dirname, './components/lib/overlaybadge/style/OverlayBadgeStyle.js'),
    'primevue/overlaypanel/style': path.resolve(__dirname, './components/lib/overlaypanel/style/OverlayPanelStyle.js'),
    'primevue/paginator/style': path.resolve(__dirname, './components/lib/paginator/style/PaginatorStyle.js'),
    'primevue/panel/style': path.resolve(__dirname, './components/lib/panel/style/PanelStyle.js'),
    'primevue/panelmenu/style': path.resolve(__dirname, './components/lib/panelmenu/style/PanelMenuStyle.js'),
    'primevue/password/style': path.resolve(__dirname, './components/lib/password/style/PasswordStyle.js'),
    'primevue/picklist/style': path.resolve(__dirname, './components/lib/picklist/style/PickListStyle.js'),
    'primevue/popover/style': path.resolve(__dirname, './components/lib/popover/style/PopoverStyle.js'),
    'primevue/portal/style': path.resolve(__dirname, './components/lib/portal/style/PortalStyle.js'),
    'primevue/progressbar/style': path.resolve(__dirname, './components/lib/progressbar/style/ProgressBarStyle.js'),
    'primevue/progressspinner/style': path.resolve(__dirname, './components/lib/progressspinner/style/ProgressSpinnerStyle.js'),
    'primevue/radiobutton/style': path.resolve(__dirname, './components/lib/radiobutton/style/RadioButtonStyle.js'),
    'primevue/rating/style': path.resolve(__dirname, './components/lib/rating/style/RatingStyle.js'),
    'primevue/ripple/style': path.resolve(__dirname, './components/lib/ripple/style/RippleStyle.js'),
    'primevue/row/style': path.resolve(__dirname, './components/lib/row/style/RowStyle.js'),
    'primevue/scrollpanel/style': path.resolve(__dirname, './components/lib/scrollpanel/style/ScrollPanelStyle.js'),
    'primevue/scrolltop/style': path.resolve(__dirname, './components/lib/scrolltop/style/ScrollTopStyle.js'),
    'primevue/select/style': path.resolve(__dirname, './components/lib/select/style/SelectStyle.js'),
    'primevue/selectbutton/style': path.resolve(__dirname, './components/lib/selectbutton/style/SelectButtonStyle.js'),
    'primevue/sidebar/style': path.resolve(__dirname, './components/lib/sidebar/style/SidebarStyle.js'),
    'primevue/skeleton/style': path.resolve(__dirname, './components/lib/skeleton/style/SkeletonStyle.js'),
    'primevue/slider/style': path.resolve(__dirname, './components/lib/slider/style/SliderStyle.js'),
    'primevue/speeddial/style': path.resolve(__dirname, './components/lib/speeddial/style/SpeedDialStyle.js'),
    'primevue/splitbutton/style': path.resolve(__dirname, './components/lib/splitbutton/style/SplitButtonStyle.js'),
    'primevue/splitter/style': path.resolve(__dirname, './components/lib/splitter/style/SplitterStyle.js'),
    'primevue/splitterpanel/style': path.resolve(__dirname, './components/lib/splitterpanel/style/SplitterPanelStyle.js'),
    'primevue/steps/style': path.resolve(__dirname, './components/lib/steps/style/StepsStyle.js'),
    'primevue/stepper/style': path.resolve(__dirname, './components/lib/stepper/style/StepperStyle.js'),
    'primevue/stepperpanel/style': path.resolve(__dirname, './components/lib/stepperpanel/style/StepperPanelStyle.js'),
    'primevue/styleclass/style': path.resolve(__dirname, './components/lib/styleclass/style/StyleClassStyle.js'),
    'primevue/tabmenu/style': path.resolve(__dirname, './components/lib/tabmenu/style/TabMenuStyle.js'),
    'primevue/tabs/style': path.resolve(__dirname, './components/lib/tabs/style/TabsStyle.js'),
    'primevue/tablist/style': path.resolve(__dirname, './components/lib/tablist/style/TabListStyle.js'),
    'primevue/tab/style': path.resolve(__dirname, './components/lib/tab/style/TabStyle.js'),
    'primevue/tabpanels/style': path.resolve(__dirname, './components/lib/tabpanels/style/TabPanelsStyle.js'),
    'primevue/tabpanel/style': path.resolve(__dirname, './components/lib/tabpanel/style/TabPanelStyle.js'),
    'primevue/tabview/style': path.resolve(__dirname, './components/lib/tabview/style/TabViewStyle.js'),
    'primevue/tag/style': path.resolve(__dirname, './components/lib/tag/style/TagStyle.js'),
    'primevue/terminal/style': path.resolve(__dirname, './components/lib/terminal/style/TerminalStyle.js'),
    'primevue/textarea/style': path.resolve(__dirname, './components/lib/textarea/style/TextareaStyle.js'),
    'primevue/tieredmenu/style': path.resolve(__dirname, './components/lib/tieredmenu/style/TieredMenuStyle.js'),
    'primevue/timeline/style': path.resolve(__dirname, './components/lib/timeline/style/TimelineStyle.js'),
    'primevue/toast/style': path.resolve(__dirname, './components/lib/toast/style/ToastStyle.js'),
    'primevue/togglebutton/style': path.resolve(__dirname, './components/lib/togglebutton/style/ToggleButtonStyle.js'),
    'primevue/toggleswitch/style': path.resolve(__dirname, './components/lib/toggleswitch/style/ToggleSwitchStyle.js'),
    'primevue/toolbar/style': path.resolve(__dirname, './components/lib/toolbar/style/ToolbarStyle.js'),
    'primevue/tooltip/style': path.resolve(__dirname, './components/lib/tooltip/style/TooltipStyle.js'),
    'primevue/tree/style': path.resolve(__dirname, './components/lib/tree/style/TreeStyle.js'),
    'primevue/treeselect/style': path.resolve(__dirname, './components/lib/treeselect/style/TreeSelectStyle.js'),
    'primevue/treetable/style': path.resolve(__dirname, './components/lib/treetable/style/TreeTableStyle.js'),
    'primevue/virtualscroller/style': path.resolve(__dirname, './components/lib/virtualscroller/style/VirtualScrollerStyle.js')
};

const ICON_ALIAS = {
    'primevue/baseicon': path.resolve(__dirname, './components/lib/baseicon/BaseIcon.vue'),
    'primevue/icons/angledoubledown': path.resolve(__dirname, './components/lib/icons/angledoubledown/index.vue'),
    'primevue/icons/angledoubleleft': path.resolve(__dirname, './components/lib/icons/angledoubleleft/index.vue'),
    'primevue/icons/angledoubleright': path.resolve(__dirname, './components/lib/icons/angledoubleright/index.vue'),
    'primevue/icons/angledoubleup': path.resolve(__dirname, './components/lib/icons/angledoubleup/index.vue'),
    'primevue/icons/angledown': path.resolve(__dirname, './components/lib/icons/angledown/index.vue'),
    'primevue/icons/angleleft': path.resolve(__dirname, './components/lib/icons/angleleft/index.vue'),
    'primevue/icons/angleright': path.resolve(__dirname, './components/lib/icons/angleright/index.vue'),
    'primevue/icons/angleup': path.resolve(__dirname, './components/lib/icons/angleup/index.vue'),
    'primevue/icons/arrowdown': path.resolve(__dirname, './components/lib/icons/arrowdown/index.vue'),
    'primevue/icons/arrowup': path.resolve(__dirname, './components/lib/icons/arrowup/index.vue'),
    'primevue/icons/ban': path.resolve(__dirname, './components/lib/icons/ban/index.vue'),
    'primevue/icons/bars': path.resolve(__dirname, './components/lib/icons/bars/index.vue'),
    'primevue/icons/blank': path.resolve(__dirname, './components/lib/icons/blank/index.vue'),
    'primevue/icons/calendar': path.resolve(__dirname, './components/lib/icons/calendar/index.vue'),
    'primevue/icons/check': path.resolve(__dirname, './components/lib/icons/check/index.vue'),
    'primevue/icons/chevrondown': path.resolve(__dirname, './components/lib/icons/chevrondown/index.vue'),
    'primevue/icons/chevronleft': path.resolve(__dirname, './components/lib/icons/chevronleft/index.vue'),
    'primevue/icons/chevronright': path.resolve(__dirname, './components/lib/icons/chevronright/index.vue'),
    'primevue/icons/chevronup': path.resolve(__dirname, './components/lib/icons/chevronup/index.vue'),
    'primevue/icons/exclamationtriangle': path.resolve(__dirname, './components/lib/icons/exclamationtriangle/index.vue'),
    'primevue/icons/eye': path.resolve(__dirname, './components/lib/icons/eye/index.vue'),
    'primevue/icons/eyeslash': path.resolve(__dirname, './components/lib/icons/eyeslash/index.vue'),
    'primevue/icons/filter': path.resolve(__dirname, './components/lib/icons/filter/index.vue'),
    'primevue/icons/filterslash': path.resolve(__dirname, './components/lib/icons/filterslash/index.vue'),
    'primevue/icons/infocircle': path.resolve(__dirname, './components/lib/icons/infocircle/index.vue'),
    'primevue/icons/minus': path.resolve(__dirname, './components/lib/icons/minus/index.vue'),
    'primevue/icons/pencil': path.resolve(__dirname, './components/lib/icons/pencil/index.vue'),
    'primevue/icons/plus': path.resolve(__dirname, './components/lib/icons/plus/index.vue'),
    'primevue/icons/refresh': path.resolve(__dirname, './components/lib/icons/refresh/index.vue'),
    'primevue/icons/search': path.resolve(__dirname, './components/lib/icons/search/index.vue'),
    'primevue/icons/searchminus': path.resolve(__dirname, './components/lib/icons/searchminus/index.vue'),
    'primevue/icons/searchplus': path.resolve(__dirname, './components/lib/icons/searchplus/index.vue'),
    'primevue/icons/sortalt': path.resolve(__dirname, './components/lib/icons/sortalt/index.vue'),
    'primevue/icons/sortamountdown': path.resolve(__dirname, './components/lib/icons/sortamountdown/index.vue'),
    'primevue/icons/sortamountupalt': path.resolve(__dirname, './components/lib/icons/sortamountupalt/index.vue'),
    'primevue/icons/spinner': path.resolve(__dirname, './components/lib/icons/spinner/index.vue'),
    'primevue/icons/star': path.resolve(__dirname, './components/lib/icons/star/index.vue'),
    'primevue/icons/starfill': path.resolve(__dirname, './components/lib/icons/starfill/index.vue'),
    'primevue/icons/thlarge': path.resolve(__dirname, './components/lib/icons/thlarge/index.vue'),
    'primevue/icons/times': path.resolve(__dirname, './components/lib/icons/times/index.vue'),
    'primevue/icons/timescircle': path.resolve(__dirname, './components/lib/icons/timescircle/index.vue'),
    'primevue/icons/trash': path.resolve(__dirname, './components/lib/icons/trash/index.vue'),
    'primevue/icons/undo': path.resolve(__dirname, './components/lib/icons/undo/index.vue'),
    'primevue/icons/upload': path.resolve(__dirname, './components/lib/icons/upload/index.vue'),
    'primevue/icons/windowmaximize': path.resolve(__dirname, './components/lib/icons/windowmaximize/index.vue'),
    'primevue/icons/windowminimize': path.resolve(__dirname, './components/lib/icons/windowminimize/index.vue')
};

// prettier-ignore
const THEME_COMPONENTS = ['accordion','autocomplete','avatar','badge','blockui','breadcrumb','button','buttongroup','card','carousel','cascadeselect','checkbox','chip','colorpicker','confirmdialog','confirmpopup','contextmenu','datatable','dataview','datepicker','dialog','divider','dock','drawer','editor','fieldset','fileupload','floatlabel','galleria','iconfield','image','inlinemessage','inplace','inputchips','inputgroup','inputnumber','inputotp','inputtext','knob','listbox','megamenu','menu','menubar','message','metergroup','multiselect','orderlist','organizationchart','paginator','panel','panelmenu','password','picklist','popover','progressbar','progressspinner','radiobutton','rating','ripple','scrollpanel','scrolltop','select','selectbutton','skeleton','slider','speeddial','splitbutton','splitter','steps','stepper','tabmenu','tabs','tabview','tag','terminal','textarea','tieredmenu','timeline','toast','togglebutton','toggleswitch','toolbar','tooltip','tree','treeselect','treetable'];

const createThemeAlias = (presets) => {
    const presetAlias = presets?.reduce((p_acc, p_name) => {
        const p_alias = THEME_COMPONENTS.reduce((acc, name) => {
            acc[`primevue/themes/${p_name}/${name}`] = path.resolve(__dirname, `./components/lib/themes/${p_name}/${name}/index.js`);

            return acc;
        }, {});

        p_acc = { ...p_acc, ...p_alias };

        return p_acc;
    }, {});

    const mainAlias = presets?.reduce((p_acc, p_name) => {
        p_acc = {
            ...p_acc,
            [`primevue/themes/${p_name}`]: path.resolve(__dirname, `./components/lib/themes/${p_name}/index.js`)
        };

        return p_acc;
    }, {});

    return { ...presetAlias, ...mainAlias };
};

const THEME_ALIAS = {
    'primevue/themes/utils': path.resolve(__dirname, './components/lib/themes/utils/index.js'),
    'primevue/themes/config': path.resolve(__dirname, './components/lib/themes/config/index.js'),
    'primevue/themes/service': path.resolve(__dirname, './components/lib/themes/service/index.js'),
    'primevue/themes/helpers': path.resolve(__dirname, './components/lib/themes/helpers/index.js'),
    'primevue/themes/actions': path.resolve(__dirname, './components/lib/themes/actions/index.js'),
    ...createThemeAlias(THEME_PRESETS),
    'primevue/themes': path.resolve(__dirname, './components/lib/themes/index.js')
};

export default {
    resolve: {
        optimizeDeps: {
            disabled: true
        },
        alias: {
            'primevue/utils': path.resolve(__dirname, './components/lib/utils/Utils.js'),
            'primevue/service': path.resolve(__dirname, './components/lib/service/PrimeVueService.js'),
            'primevue/config': path.resolve(__dirname, './components/lib/config/PrimeVue.js'),
            'primevue/api': path.resolve(__dirname, './components/lib/api/Api.js'),
            ...STYLE_ALIAS,
            ...THEME_ALIAS,
            'primevue/base': path.resolve(__dirname, './components/lib/base/Base.js'),
            'primevue/basedirective': path.resolve(__dirname, './components/lib/basedirective/BaseDirective.js'),
            'primevue/ripple': path.resolve(__dirname, './components/lib/ripple/Ripple.js'),
            'primevue/tooltip': path.resolve(__dirname, './components/lib/tooltip/Tooltip.js'),
            'primevue/focustrap': path.resolve(__dirname, './components/lib/focustrap/FocusTrap.js'),
            'primevue/useconfirm': path.resolve(__dirname, './components/lib/useconfirm/UseConfirm.js'),
            'primevue/usetoast': path.resolve(__dirname, './components/lib/usetoast/UseToast.js'),
            'primevue/usedialog': path.resolve(__dirname, './components/lib/usedialog/UseDialog.js'),
            'primevue/usestyle': path.resolve(__dirname, './components/lib/usestyle/UseStyle.js'),
            'primevue/portal': path.resolve(__dirname, './components/lib/portal/Portal.vue'),
            'primevue/basecomponent': path.resolve(__dirname, './components/lib/basecomponent/BaseComponent.vue'),
            ...ICON_ALIAS,
            'primevue/button': path.resolve(__dirname, './components/lib/button/Button.vue'),
            'primevue/inputtext': path.resolve(__dirname, './components/lib/inputtext/InputText.vue'),
            'primevue/checkbox': path.resolve(__dirname, './components/lib/checkbox/Checkbox.vue'),
            'primevue/radiobutton': path.resolve(__dirname, './components/lib/radiobutton/RadioButton.vue'),
            'primevue/dialog': path.resolve(__dirname, './components/lib/dialog/Dialog.vue'),
            'primevue/menu': path.resolve(__dirname, './components/lib/menu/Menu.vue'),
            'primevue/tieredmenu': path.resolve(__dirname, './components/lib/tieredmenu/TieredMenu.vue'),
            'primevue/dropdown': path.resolve(__dirname, './components/lib/dropdown/Dropdown.vue'),
            'primevue/inputnumber': path.resolve(__dirname, './components/lib/inputnumber/InputNumber.vue'),
            'primevue/paginator': path.resolve(__dirname, './components/lib/paginator/Paginator.vue'),
            'primevue/progressbar': path.resolve(__dirname, './components/lib/progressbar/ProgressBar.vue'),
            'primevue/message': path.resolve(__dirname, './components/lib/message/Message.vue'),
            'primevue/tree': path.resolve(__dirname, './components/lib/tree/Tree.vue'),
            'primevue/badge': path.resolve(__dirname, './components/lib/badge/Badge.vue'),
            'primevue/togglebutton': path.resolve(__dirname, './components/lib/togglebutton/ToggleButton.vue'),
            'primevue/iconfield': path.resolve(__dirname, './components/lib/iconfield/IconField.vue'),
            'primevue/inputicon': path.resolve(__dirname, './components/lib/inputicon/InputIcon.vue'),
            'primevue/listbox': path.resolve(__dirname, './components/lib/listbox/Listbox.vue'),
            'primevue/chip': path.resolve(__dirname, './components/lib/chip/Chip.vue'),
            'primevue/popover': path.resolve(__dirname, './components/lib/popover/Popover.vue'),
            'primevue/toggleswitch': path.resolve(__dirname, './components/lib/toggleswitch/ToggleSwitch.vue'),
            'primevue/drawer': path.resolve(__dirname, './components/lib/drawer/Drawer.vue'),
            'primevue/inputchips': path.resolve(__dirname, './components/lib/inputchips/InputChips.vue'),
            'primevue/datepicker': path.resolve(__dirname, './components/lib/datepicker/DatePicker.vue'),
            'primevue/select': path.resolve(__dirname, './components/lib/select/Select.vue'),
            'primevue/confirmationeventbus': path.resolve(__dirname, './components/lib/confirmationeventbus/ConfirmationEventBus.js'),
            'primevue/toasteventbus': path.resolve(__dirname, './components/lib/toasteventbus/ToastEventBus.js'),
            'primevue/overlayeventbus': path.resolve(__dirname, './components/lib/overlayeventbus/OverlayEventBus.js'),
            'primevue/terminalservice': path.resolve(__dirname, './components/lib/terminalservice/TerminalService.js'),
            'primevue/dynamicdialogeventbus': path.resolve(__dirname, './components/lib/dynamicdialogeventbus/DynamicDialogEventBus.js'),
            'primevue/virtualscroller': path.resolve(__dirname, './components/lib/virtualscroller/VirtualScroller.vue'),
            'primevue/passthrough': path.resolve(__dirname, './components/lib/passthrough/index.js'),
            'primevue/accordioncontent': path.resolve(__dirname, './components/lib/accordioncontent/AccordionContent.vue'),
            'primevue/accordionheader': path.resolve(__dirname, './components/lib/accordionheader/AccordionHeader.vue'),
            'primevue/accordionpanel': path.resolve(__dirname, './components/lib/accordionpanel/AccordionPanel.vue')
        }
    }
};
