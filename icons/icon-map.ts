"use client";

import type { ComponentType } from "react";
import HeartIcon from "@/icons/heart-icon";
import StarIcon from "@/icons/star-icon";
import MoonIcon from "@/icons/moon-icon";
import SunIcon from "@/icons/sun-icon";
import CheckIcon from "@/icons/check-icon";
import BookmarkIcon from "@/icons/bookmark-icon";
import SettingsIcon from "@/icons/settings-icon";
import CopyIcon from "@/icons/copy-icon";
import SendIcon from "@/icons/send-icon";
import BellIcon from "@/icons/bell-icon";
import CameraIcon from "@/icons/camera-icon";
import CoffeeIcon from "@/icons/coffee-icon";
import RocketIcon from "@/icons/rocket-icon";
import SmartphoneIcon from "@/icons/smartphone-icon";
import TabletIcon from "@/icons/tablet-icon";
import LaptopIcon from "@/icons/laptop-icon";
import MonitorIcon from "@/icons/monitor-icon";
import BatteryIcon from "@/icons/battery-icon";
import BatteryChargingIcon from "@/icons/battery-charging-icon";
import WifiIcon from "@/icons/wifi-icon";
import BluetoothIcon from "@/icons/bluetooth-icon";
import SignalIcon from "@/icons/signal-icon";
import PhoneIcon from "@/icons/phone-icon";
import CodeIcon from "@/icons/code-icon";
import TerminalIcon from "@/icons/terminal-icon";
import GitBranchIcon from "@/icons/git-branch-icon";
import DatabaseIcon from "@/icons/database-icon";
import ServerIcon from "@/icons/server-icon";
import CpuIcon from "@/icons/cpu-icon";
import FileCodeIcon from "@/icons/file-code-icon";
import LanguagesIcon from "@/icons/languages-icon";
import CalculatorIcon from "@/icons/calculator-icon";
import BugIcon from "@/icons/bug-icon";
import PizzaIcon from "@/icons/pizza-icon";
import BeerIcon from "@/icons/beer-icon";
import DonutIcon from "@/icons/donut-icon";
import IceCreamBowlIcon from "@/icons/ice-cream-bowl-icon";
import CakeIcon from "@/icons/cake-icon";
import AppleIcon from "@/icons/apple-icon";
import SandwichIcon from "@/icons/sandwich-icon";
import UtensilsIcon from "@/icons/utensils-icon";
import CroissantIcon from "@/icons/croissant-icon";
import PopcornIcon from "@/icons/popcorn-icon";
import CloudIcon from "@/icons/cloud-icon";
import CloudRainIcon from "@/icons/cloud-rain-icon";
import CloudSnowIcon from "@/icons/cloud-snow-icon";
import CloudLightningIcon from "@/icons/cloud-lightning-icon";
import CloudSunIcon from "@/icons/cloud-sun-icon";
import SnowflakeIcon from "@/icons/snowflake-icon";
import WindIcon from "@/icons/wind-icon";
import UmbrellaIcon from "@/icons/umbrella-icon";
import RainbowIcon from "@/icons/rainbow-icon";
import TornadoIcon from "@/icons/tornado-icon";
import MusicIcon from "@/icons/music-icon";
import Music2Icon from "@/icons/music-2-icon";
import HeadphonesIcon from "@/icons/headphones-icon";
import MicIcon from "@/icons/mic-icon";
import PlayIcon from "@/icons/play-icon";
import PauseIcon from "@/icons/pause-icon";
import Volume2Icon from "@/icons/volume-2-icon";
import ClapperboardIcon from "@/icons/clapperboard-icon";
import GamepadIcon from "@/icons/gamepad-icon";
import FilmIcon from "@/icons/film-icon";
import PlaneIcon from "@/icons/plane-icon";
import CarIcon from "@/icons/car-icon";
import BusIcon from "@/icons/bus-icon";
import ShipIcon from "@/icons/ship-icon";
import CompassIcon from "@/icons/compass-icon";
import MapIcon from "@/icons/map-icon";
import NavigationIcon from "@/icons/navigation-icon";
import MapPinIcon from "@/icons/map-pin-icon";
import TicketIcon from "@/icons/ticket-icon";
import AnchorIcon from "@/icons/anchor-icon";
import HouseIcon from "@/icons/house-icon";
import LampIcon from "@/icons/lamp-icon";
import SofaIcon from "@/icons/sofa-icon";
import BedIcon from "@/icons/bed-icon";
import LightbulbIcon from "@/icons/lightbulb-icon";
import TvIcon from "@/icons/tv-icon";
import KeyboardIcon from "@/icons/keyboard-icon";
import PrinterIcon from "@/icons/printer-icon";
import ThermometerIcon from "@/icons/thermometer-icon";
import WashingMachineIcon from "@/icons/washing-machine-icon";
import DollarSignIcon from "@/icons/dollar-sign-icon";
import BitcoinIcon from "@/icons/bitcoin-icon";
import CreditCardIcon from "@/icons/credit-card-icon";
import WalletIcon from "@/icons/wallet-icon";
import TagIcon from "@/icons/tag-icon";
import ReceiptIcon from "@/icons/receipt-icon";
import ShoppingCartIcon from "@/icons/shopping-cart-icon";
import TrendingUpIcon from "@/icons/trending-up-icon";
import ChartPieIcon from "@/icons/chart-pie-icon";
import CoinsIcon from "@/icons/coins-icon";
import TrophyIcon from "@/icons/trophy-icon";
import MedalIcon from "@/icons/medal-icon";
import TargetIcon from "@/icons/target-icon";
import GiftIcon from "@/icons/gift-icon";
import SparkleIcon from "@/icons/sparkle-icon";
import PaletteIcon from "@/icons/palette-icon";
import GemIcon from "@/icons/gem-icon";
import ArrowUpIcon from "@/icons/arrow-up-icon";
import ArrowDownIcon from "@/icons/arrow-down-icon";
import ArrowRightIcon from "@/icons/arrow-right-icon";
import ArrowLeftIcon from "@/icons/arrow-left-icon";
import ArrowUpRightIcon from "@/icons/arrow-up-right-icon";
import ArrowDownLeftIcon from "@/icons/arrow-down-left-icon";
import ArrowLeftRightIcon from "@/icons/arrow-left-right-icon";
import ArrowUpDownIcon from "@/icons/arrow-up-down-icon";
import ArrowDownToLineIcon from "@/icons/arrow-down-to-line-icon";
import ArrowUpFromLineIcon from "@/icons/arrow-up-from-line-icon";
import ClockIcon from "@/icons/clock-icon";
import AlarmClockIcon from "@/icons/alarm-clock-icon";
import TimerIcon from "@/icons/timer-icon";
import HourglassIcon from "@/icons/hourglass-icon";
import WatchIcon from "@/icons/watch-icon";
import Clock3Icon from "@/icons/clock-3-icon";
import CalendarIcon from "@/icons/calendar-icon";
import CalendarDaysIcon from "@/icons/calendar-days-icon";
import CalendarCheckIcon from "@/icons/calendar-check-icon";
import TimerResetIcon from "@/icons/timer-reset-icon";
import MailIcon from "@/icons/mail-icon";
import MessageCircleIcon from "@/icons/message-circle-icon";
import MessageSquareIcon from "@/icons/message-square-icon";
import MessageCircleMoreIcon from "@/icons/message-circle-more-icon";
import MessageSquareTextIcon from "@/icons/message-square-text-icon";
import MessageSquareDotIcon from "@/icons/message-square-dot-icon";
import MessageSquarePlusIcon from "@/icons/message-square-plus-icon";
import VoicemailIcon from "@/icons/voicemail-icon";
import MailPlusIcon from "@/icons/mail-plus-icon";
import AtSignIcon from "@/icons/at-sign-icon";
import ChartLineIcon from "@/icons/chart-line-icon";
import ChartSplineIcon from "@/icons/chart-spline-icon";
import ChartColumnIcon from "@/icons/chart-column-icon";
import ChartColumnBigIcon from "@/icons/chart-column-big-icon";
import ChartAreaIcon from "@/icons/chart-area-icon";
import ChartBarBigIcon from "@/icons/chart-bar-big-icon";
import ChartNoAxesCombinedIcon from "@/icons/chart-no-axes-combined-icon";
import ChartNoAxesColumnIcon from "@/icons/chart-no-axes-column-icon";
import ChartScatterIcon from "@/icons/chart-scatter-icon";
import ChartNoAxesGanttIcon from "@/icons/chart-no-axes-gantt-icon";
import LocateFixedIcon from "@/icons/locate-fixed-icon";
import MapPinOffIcon from "@/icons/map-pin-off-icon";
import MapPinnedIcon from "@/icons/map-pinned-icon";
import Navigation2Icon from "@/icons/navigation-2-icon";
import NavigationOffIcon from "@/icons/navigation-off-icon";
import CrosshairIcon from "@/icons/crosshair-icon";
import RouteIcon from "@/icons/route-icon";
import SignpostBigIcon from "@/icons/signpost-big-icon";
import EarthIcon from "@/icons/earth-icon";
import GlobeIcon from "@/icons/globe-icon";
import FileTextIcon from "@/icons/file-text-icon";
import FilePlusIcon from "@/icons/file-plus-icon";
import FileCheckIcon from "@/icons/file-check-icon";
import FileSearchIcon from "@/icons/file-search-icon";
import FolderIcon from "@/icons/folder-icon";
import FolderOpenIcon from "@/icons/folder-open-icon";
import ClipboardPasteIcon from "@/icons/clipboard-paste-icon";
import ClipboardCheckIcon from "@/icons/clipboard-check-icon";
import PencilIcon from "@/icons/pencil-icon";
import GlassesIcon from "@/icons/glasses-icon";
import LaptopMinimalIcon from "@/icons/laptop-minimal-icon";
import MouseIcon from "@/icons/mouse-icon";
import Gamepad2Icon from "@/icons/gamepad-2-icon";
import KeyboardMusicIcon from "@/icons/keyboard-music-icon";
import WebcamIcon from "@/icons/webcam-icon";
import HardDriveIcon from "@/icons/hard-drive-icon";
import UsbIcon from "@/icons/usb-icon";
import PhoneCallIcon from "@/icons/phone-call-icon";
import MicVocalIcon from "@/icons/mic-vocal-icon";
import RouterIcon from "@/icons/router-icon";
import ImageIcon from "@/icons/image-icon";
import ImagePlusIcon from "@/icons/image-plus-icon";
import ImageUpIcon from "@/icons/image-up-icon";
import ImageDownIcon from "@/icons/image-down-icon";
import VideoIcon from "@/icons/video-icon";
import VideoOffIcon from "@/icons/video-off-icon";
import VideotapeIcon from "@/icons/videotape-icon";
import ApertureIcon from "@/icons/aperture-icon";
import ImagesIcon from "@/icons/images-icon";
import ImagePlayIcon from "@/icons/image-play-icon";
import ShoppingBagIcon from "@/icons/shopping-bag-icon";
import ShoppingBasketIcon from "@/icons/shopping-basket-icon";
import StoreIcon from "@/icons/store-icon";
import HandCoinsIcon from "@/icons/hand-coins-icon";
import PiggyBankIcon from "@/icons/piggy-bank-icon";
import VaultIcon from "@/icons/vault-icon";
import CircleDollarSignIcon from "@/icons/circle-dollar-sign-icon";
import CircleEuroIcon from "@/icons/circle-euro-icon";
import ChartCandlestickIcon from "@/icons/chart-candlestick-icon";
import TrendingDownIcon from "@/icons/trending-down-icon";
import Dice1Icon from "@/icons/dice-1-icon";
import Dice2Icon from "@/icons/dice-2-icon";
import Dice3Icon from "@/icons/dice-3-icon";
import Dice4Icon from "@/icons/dice-4-icon";
import Dice5Icon from "@/icons/dice-5-icon";
import SwordIcon from "@/icons/sword-icon";
import SwordsIcon from "@/icons/swords-icon";
import ShieldIcon from "@/icons/shield-icon";
import ShieldHalfIcon from "@/icons/shield-half-icon";
import CastleIcon from "@/icons/castle-icon";
import HeartPulseIcon from "@/icons/heart-pulse-icon";
import StethoscopeIcon from "@/icons/stethoscope-icon";
import ActivityIcon from "@/icons/activity-icon";
import PillIcon from "@/icons/pill-icon";
import BiohazardIcon from "@/icons/biohazard-icon";
import BoneIcon from "@/icons/bone-icon";
import SyringeIcon from "@/icons/syringe-icon";
import DnaIcon from "@/icons/dna-icon";
import BabyIcon from "@/icons/baby-icon";
import BandageIcon from "@/icons/bandage-icon";
import TreePineIcon from "@/icons/tree-pine-icon";
import TreeDeciduousIcon from "@/icons/tree-deciduous-icon";
import Flower2Icon from "@/icons/flower-2-icon";
import LeafIcon from "@/icons/leaf-icon";
import MountainSnowIcon from "@/icons/mountain-snow-icon";
import MountainIcon from "@/icons/mountain-icon";
import SunMoonIcon from "@/icons/sun-moon-icon";
import CloudFogIcon from "@/icons/cloud-fog-icon";
import SproutIcon from "@/icons/sprout-icon";
import CloudyIcon from "@/icons/cloudy-icon";
import TrainFrontIcon from "@/icons/train-front-icon";
import TramFrontIcon from "@/icons/tram-front-icon";
import BusFrontIcon from "@/icons/bus-front-icon";
import SailboatIcon from "@/icons/sailboat-icon";
import TentIcon from "@/icons/tent-icon";
import BikeIcon from "@/icons/bike-icon";
import LifeBuoyIcon from "@/icons/life-buoy-icon";
import LuggageIcon from "@/icons/luggage-icon";
import CarFrontIcon from "@/icons/car-front-icon";
import TrainTrackIcon from "@/icons/train-track-icon";
import LockIcon from "@/icons/lock-icon";
import LockKeyholeIcon from "@/icons/lock-keyhole-icon";
import LockKeyholeOpenIcon from "@/icons/lock-keyhole-open-icon";
import KeyRoundIcon from "@/icons/key-round-icon";
import KeySquareIcon from "@/icons/key-square-icon";
import ShieldCheckIcon from "@/icons/shield-check-icon";
import ShieldAlertIcon from "@/icons/shield-alert-icon";
import RadarIcon from "@/icons/radar-icon";
import ScanFaceIcon from "@/icons/scan-face-icon";
import FingerprintPatternIcon from "@/icons/fingerprint-pattern-icon";
import UserRoundIcon from "@/icons/user-round-icon";
import UserRoundPlusIcon from "@/icons/user-round-plus-icon";
import UserRoundCheckIcon from "@/icons/user-round-check-icon";
import UserRoundSearchIcon from "@/icons/user-round-search-icon";
import UsersRoundIcon from "@/icons/users-round-icon";
import UserPlusIcon from "@/icons/user-plus-icon";
import UserCheckIcon from "@/icons/user-check-icon";
import UserSearchIcon from "@/icons/user-search-icon";
import ContactRoundIcon from "@/icons/contact-round-icon";
import UserRoundXIcon from "@/icons/user-round-x-icon";
import ShapesIcon from "@/icons/shapes-icon";
import PenToolIcon from "@/icons/pen-tool-icon";
import BrushIcon from "@/icons/brush-icon";
import WandSparklesIcon from "@/icons/wand-sparkles-icon";
import SplineIcon from "@/icons/spline-icon";
import PointerIcon from "@/icons/pointer-icon";
import MousePointer2Icon from "@/icons/mouse-pointer-2-icon";
import LayersIcon from "@/icons/layers-icon";
import LayoutGridIcon from "@/icons/layout-grid-icon";
import LayoutDashboardIcon from "@/icons/layout-dashboard-icon";
import DatabaseZapIcon from "@/icons/database-zap-icon";
import DatabasePlusIcon from "@/icons/database-plus-icon";
import DatabaseSearchIcon from "@/icons/database-search-icon";
import DatabaseBackupIcon from "@/icons/database-backup-icon";
import DatabaseCheckIcon from "@/icons/database-check-icon";
import DatabaseMinusIcon from "@/icons/database-minus-icon";
import DatabaseXIcon from "@/icons/database-x-icon";
import DatabaseArrowDownIcon from "@/icons/database-arrow-down-icon";
import DatabaseArrowUpIcon from "@/icons/database-arrow-up-icon";
import ArchiveRestoreIcon from "@/icons/archive-restore-icon";
import BracesIcon from "@/icons/braces-icon";
import BracketsIcon from "@/icons/brackets-icon";
import CodeXmlIcon from "@/icons/code-xml-icon";
import SquareTerminalIcon from "@/icons/square-terminal-icon";
import FileTerminalIcon from "@/icons/file-terminal-icon";
import GitMergeIcon from "@/icons/git-merge-icon";
import GitCommitHorizontalIcon from "@/icons/git-commit-horizontal-icon";
import GitPullRequestIcon from "@/icons/git-pull-request-icon";
import Heading2Icon from "@/icons/heading-2-icon";
import TextCursorInputIcon from "@/icons/text-cursor-input-icon";
import ShareIcon from "@/icons/share-icon";
import Share2Icon from "@/icons/share-2-icon";
import RssIcon from "@/icons/rss-icon";
import MegaphoneIcon from "@/icons/megaphone-icon";
import RadioIcon from "@/icons/radio-icon";
import EllipsisIcon from "@/icons/ellipsis-icon";
import EllipsisVerticalIcon from "@/icons/ellipsis-vertical-icon";
import MessageSquareShareIcon from "@/icons/message-square-share-icon";
import MessageCircleHeartIcon from "@/icons/message-circle-heart-icon";
import HeartHandshakeIcon from "@/icons/heart-handshake-icon";
import DownloadIcon from "@/icons/download-icon";
import UploadIcon from "@/icons/upload-icon";
import StarOffIcon from "@/icons/star-off-icon";
import HeartOffIcon from "@/icons/heart-off-icon";
import Trash2Icon from "@/icons/trash-2-icon";
import FlameIcon from "@/icons/flame-icon";
import DropletsIcon from "@/icons/droplets-icon";
import BanIcon from "@/icons/ban-icon";
import AwardIcon from "@/icons/award-icon";
import ZapIcon from "@/icons/zap-icon";

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "heart-icon": HeartIcon,
  "star-icon": StarIcon,
  "moon-icon": MoonIcon,
  "sun-icon": SunIcon,
  "check-icon": CheckIcon,
  "bookmark-icon": BookmarkIcon,
  "settings-icon": SettingsIcon,
  "copy-icon": CopyIcon,
  "send-icon": SendIcon,
  "bell-icon": BellIcon,
  "camera-icon": CameraIcon,
  "coffee-icon": CoffeeIcon,
  "rocket-icon": RocketIcon,
  "smartphone-icon": SmartphoneIcon,
  "tablet-icon": TabletIcon,
  "laptop-icon": LaptopIcon,
  "monitor-icon": MonitorIcon,
  "battery-icon": BatteryIcon,
  "battery-charging-icon": BatteryChargingIcon,
  "wifi-icon": WifiIcon,
  "bluetooth-icon": BluetoothIcon,
  "signal-icon": SignalIcon,
  "phone-icon": PhoneIcon,
  "code-icon": CodeIcon,
  "terminal-icon": TerminalIcon,
  "git-branch-icon": GitBranchIcon,
  "database-icon": DatabaseIcon,
  "server-icon": ServerIcon,
  "cpu-icon": CpuIcon,
  "file-code-icon": FileCodeIcon,
  "languages-icon": LanguagesIcon,
  "calculator-icon": CalculatorIcon,
  "bug-icon": BugIcon,
  "pizza-icon": PizzaIcon,
  "beer-icon": BeerIcon,
  "donut-icon": DonutIcon,
  "ice-cream-bowl-icon": IceCreamBowlIcon,
  "cake-icon": CakeIcon,
  "apple-icon": AppleIcon,
  "sandwich-icon": SandwichIcon,
  "utensils-icon": UtensilsIcon,
  "croissant-icon": CroissantIcon,
  "popcorn-icon": PopcornIcon,
  "cloud-icon": CloudIcon,
  "cloud-rain-icon": CloudRainIcon,
  "cloud-snow-icon": CloudSnowIcon,
  "cloud-lightning-icon": CloudLightningIcon,
  "cloud-sun-icon": CloudSunIcon,
  "snowflake-icon": SnowflakeIcon,
  "wind-icon": WindIcon,
  "umbrella-icon": UmbrellaIcon,
  "rainbow-icon": RainbowIcon,
  "tornado-icon": TornadoIcon,
  "music-icon": MusicIcon,
  "music-2-icon": Music2Icon,
  "headphones-icon": HeadphonesIcon,
  "mic-icon": MicIcon,
  "play-icon": PlayIcon,
  "pause-icon": PauseIcon,
  "volume-2-icon": Volume2Icon,
  "clapperboard-icon": ClapperboardIcon,
  "gamepad-icon": GamepadIcon,
  "film-icon": FilmIcon,
  "plane-icon": PlaneIcon,
  "car-icon": CarIcon,
  "bus-icon": BusIcon,
  "ship-icon": ShipIcon,
  "compass-icon": CompassIcon,
  "map-icon": MapIcon,
  "navigation-icon": NavigationIcon,
  "map-pin-icon": MapPinIcon,
  "ticket-icon": TicketIcon,
  "anchor-icon": AnchorIcon,
  "house-icon": HouseIcon,
  "lamp-icon": LampIcon,
  "sofa-icon": SofaIcon,
  "bed-icon": BedIcon,
  "lightbulb-icon": LightbulbIcon,
  "tv-icon": TvIcon,
  "keyboard-icon": KeyboardIcon,
  "printer-icon": PrinterIcon,
  "thermometer-icon": ThermometerIcon,
  "washing-machine-icon": WashingMachineIcon,
  "dollar-sign-icon": DollarSignIcon,
  "bitcoin-icon": BitcoinIcon,
  "credit-card-icon": CreditCardIcon,
  "wallet-icon": WalletIcon,
  "tag-icon": TagIcon,
  "receipt-icon": ReceiptIcon,
  "shopping-cart-icon": ShoppingCartIcon,
  "trending-up-icon": TrendingUpIcon,
  "chart-pie-icon": ChartPieIcon,
  "coins-icon": CoinsIcon,
  "trophy-icon": TrophyIcon,
  "medal-icon": MedalIcon,
  "target-icon": TargetIcon,
  "gift-icon": GiftIcon,
  "sparkle-icon": SparkleIcon,
  "palette-icon": PaletteIcon,
  "gem-icon": GemIcon,
  "arrow-up-icon": ArrowUpIcon,
  "arrow-down-icon": ArrowDownIcon,
  "arrow-right-icon": ArrowRightIcon,
  "arrow-left-icon": ArrowLeftIcon,
  "arrow-up-right-icon": ArrowUpRightIcon,
  "arrow-down-left-icon": ArrowDownLeftIcon,
  "arrow-left-right-icon": ArrowLeftRightIcon,
  "arrow-up-down-icon": ArrowUpDownIcon,
  "arrow-down-to-line-icon": ArrowDownToLineIcon,
  "arrow-up-from-line-icon": ArrowUpFromLineIcon,
  "clock-icon": ClockIcon,
  "alarm-clock-icon": AlarmClockIcon,
  "timer-icon": TimerIcon,
  "hourglass-icon": HourglassIcon,
  "watch-icon": WatchIcon,
  "clock-3-icon": Clock3Icon,
  "calendar-icon": CalendarIcon,
  "calendar-days-icon": CalendarDaysIcon,
  "calendar-check-icon": CalendarCheckIcon,
  "timer-reset-icon": TimerResetIcon,
  "mail-icon": MailIcon,
  "message-circle-icon": MessageCircleIcon,
  "message-square-icon": MessageSquareIcon,
  "message-circle-more-icon": MessageCircleMoreIcon,
  "message-square-text-icon": MessageSquareTextIcon,
  "message-square-dot-icon": MessageSquareDotIcon,
  "message-square-plus-icon": MessageSquarePlusIcon,
  "voicemail-icon": VoicemailIcon,
  "mail-plus-icon": MailPlusIcon,
  "at-sign-icon": AtSignIcon,
  "chart-line-icon": ChartLineIcon,
  "chart-spline-icon": ChartSplineIcon,
  "chart-column-icon": ChartColumnIcon,
  "chart-column-big-icon": ChartColumnBigIcon,
  "chart-area-icon": ChartAreaIcon,
  "chart-bar-big-icon": ChartBarBigIcon,
  "chart-no-axes-combined-icon": ChartNoAxesCombinedIcon,
  "chart-no-axes-column-icon": ChartNoAxesColumnIcon,
  "chart-scatter-icon": ChartScatterIcon,
  "chart-no-axes-gantt-icon": ChartNoAxesGanttIcon,
  "locate-fixed-icon": LocateFixedIcon,
  "map-pin-off-icon": MapPinOffIcon,
  "map-pinned-icon": MapPinnedIcon,
  "navigation-2-icon": Navigation2Icon,
  "navigation-off-icon": NavigationOffIcon,
  "crosshair-icon": CrosshairIcon,
  "route-icon": RouteIcon,
  "signpost-big-icon": SignpostBigIcon,
  "earth-icon": EarthIcon,
  "globe-icon": GlobeIcon,
  "file-text-icon": FileTextIcon,
  "file-plus-icon": FilePlusIcon,
  "file-check-icon": FileCheckIcon,
  "file-search-icon": FileSearchIcon,
  "folder-icon": FolderIcon,
  "folder-open-icon": FolderOpenIcon,
  "clipboard-paste-icon": ClipboardPasteIcon,
  "clipboard-check-icon": ClipboardCheckIcon,
  "pencil-icon": PencilIcon,
  "glasses-icon": GlassesIcon,
  "laptop-minimal-icon": LaptopMinimalIcon,
  "mouse-icon": MouseIcon,
  "gamepad-2-icon": Gamepad2Icon,
  "keyboard-music-icon": KeyboardMusicIcon,
  "webcam-icon": WebcamIcon,
  "hard-drive-icon": HardDriveIcon,
  "usb-icon": UsbIcon,
  "phone-call-icon": PhoneCallIcon,
  "mic-vocal-icon": MicVocalIcon,
  "router-icon": RouterIcon,
  "image-icon": ImageIcon,
  "image-plus-icon": ImagePlusIcon,
  "image-up-icon": ImageUpIcon,
  "image-down-icon": ImageDownIcon,
  "video-icon": VideoIcon,
  "video-off-icon": VideoOffIcon,
  "videotape-icon": VideotapeIcon,
  "aperture-icon": ApertureIcon,
  "images-icon": ImagesIcon,
  "image-play-icon": ImagePlayIcon,
  "shopping-bag-icon": ShoppingBagIcon,
  "shopping-basket-icon": ShoppingBasketIcon,
  "store-icon": StoreIcon,
  "hand-coins-icon": HandCoinsIcon,
  "piggy-bank-icon": PiggyBankIcon,
  "vault-icon": VaultIcon,
  "circle-dollar-sign-icon": CircleDollarSignIcon,
  "circle-euro-icon": CircleEuroIcon,
  "chart-candlestick-icon": ChartCandlestickIcon,
  "trending-down-icon": TrendingDownIcon,
  "dice-1-icon": Dice1Icon,
  "dice-2-icon": Dice2Icon,
  "dice-3-icon": Dice3Icon,
  "dice-4-icon": Dice4Icon,
  "dice-5-icon": Dice5Icon,
  "sword-icon": SwordIcon,
  "swords-icon": SwordsIcon,
  "shield-icon": ShieldIcon,
  "shield-half-icon": ShieldHalfIcon,
  "castle-icon": CastleIcon,
  "heart-pulse-icon": HeartPulseIcon,
  "stethoscope-icon": StethoscopeIcon,
  "activity-icon": ActivityIcon,
  "pill-icon": PillIcon,
  "biohazard-icon": BiohazardIcon,
  "bone-icon": BoneIcon,
  "syringe-icon": SyringeIcon,
  "dna-icon": DnaIcon,
  "baby-icon": BabyIcon,
  "bandage-icon": BandageIcon,
  "tree-pine-icon": TreePineIcon,
  "tree-deciduous-icon": TreeDeciduousIcon,
  "flower-2-icon": Flower2Icon,
  "leaf-icon": LeafIcon,
  "mountain-snow-icon": MountainSnowIcon,
  "mountain-icon": MountainIcon,
  "sun-moon-icon": SunMoonIcon,
  "cloud-fog-icon": CloudFogIcon,
  "sprout-icon": SproutIcon,
  "cloudy-icon": CloudyIcon,
  "train-front-icon": TrainFrontIcon,
  "tram-front-icon": TramFrontIcon,
  "bus-front-icon": BusFrontIcon,
  "sailboat-icon": SailboatIcon,
  "tent-icon": TentIcon,
  "bike-icon": BikeIcon,
  "life-buoy-icon": LifeBuoyIcon,
  "luggage-icon": LuggageIcon,
  "car-front-icon": CarFrontIcon,
  "train-track-icon": TrainTrackIcon,
  "lock-icon": LockIcon,
  "lock-keyhole-icon": LockKeyholeIcon,
  "lock-keyhole-open-icon": LockKeyholeOpenIcon,
  "key-round-icon": KeyRoundIcon,
  "key-square-icon": KeySquareIcon,
  "shield-check-icon": ShieldCheckIcon,
  "shield-alert-icon": ShieldAlertIcon,
  "radar-icon": RadarIcon,
  "scan-face-icon": ScanFaceIcon,
  "fingerprint-pattern-icon": FingerprintPatternIcon,
  "user-round-icon": UserRoundIcon,
  "user-round-plus-icon": UserRoundPlusIcon,
  "user-round-check-icon": UserRoundCheckIcon,
  "user-round-search-icon": UserRoundSearchIcon,
  "users-round-icon": UsersRoundIcon,
  "user-plus-icon": UserPlusIcon,
  "user-check-icon": UserCheckIcon,
  "user-search-icon": UserSearchIcon,
  "contact-round-icon": ContactRoundIcon,
  "user-round-x-icon": UserRoundXIcon,
  "shapes-icon": ShapesIcon,
  "pen-tool-icon": PenToolIcon,
  "brush-icon": BrushIcon,
  "wand-sparkles-icon": WandSparklesIcon,
  "spline-icon": SplineIcon,
  "pointer-icon": PointerIcon,
  "mouse-pointer-2-icon": MousePointer2Icon,
  "layers-icon": LayersIcon,
  "layout-grid-icon": LayoutGridIcon,
  "layout-dashboard-icon": LayoutDashboardIcon,
  "database-zap-icon": DatabaseZapIcon,
  "database-plus-icon": DatabasePlusIcon,
  "database-search-icon": DatabaseSearchIcon,
  "database-backup-icon": DatabaseBackupIcon,
  "database-check-icon": DatabaseCheckIcon,
  "database-minus-icon": DatabaseMinusIcon,
  "database-x-icon": DatabaseXIcon,
  "database-arrow-down-icon": DatabaseArrowDownIcon,
  "database-arrow-up-icon": DatabaseArrowUpIcon,
  "archive-restore-icon": ArchiveRestoreIcon,
  "braces-icon": BracesIcon,
  "brackets-icon": BracketsIcon,
  "code-xml-icon": CodeXmlIcon,
  "square-terminal-icon": SquareTerminalIcon,
  "file-terminal-icon": FileTerminalIcon,
  "git-merge-icon": GitMergeIcon,
  "git-commit-horizontal-icon": GitCommitHorizontalIcon,
  "git-pull-request-icon": GitPullRequestIcon,
  "heading-2-icon": Heading2Icon,
  "text-cursor-input-icon": TextCursorInputIcon,
  "share-icon": ShareIcon,
  "share-2-icon": Share2Icon,
  "rss-icon": RssIcon,
  "megaphone-icon": MegaphoneIcon,
  "radio-icon": RadioIcon,
  "ellipsis-icon": EllipsisIcon,
  "ellipsis-vertical-icon": EllipsisVerticalIcon,
  "message-square-share-icon": MessageSquareShareIcon,
  "message-circle-heart-icon": MessageCircleHeartIcon,
  "heart-handshake-icon": HeartHandshakeIcon,
  "download-icon": DownloadIcon,
  "upload-icon": UploadIcon,
  "star-off-icon": StarOffIcon,
  "heart-off-icon": HeartOffIcon,
  "trash-2-icon": Trash2Icon,
  "flame-icon": FlameIcon,
  "droplets-icon": DropletsIcon,
  "ban-icon": BanIcon,
  "award-icon": AwardIcon,
  "zap-icon": ZapIcon,
};

export function getIconComponent(file: string) {
  return iconMap[file];
}
