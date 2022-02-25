import { defineUnimportPreset } from '../utils'

export default defineUnimportPreset({
  from: 'solid-app-router',
  imports: [
    'Link',
    'NavLink',
    'Navigate',
    'Outlet',
    'Route',
    'Router',
    'Routes',
    '_mergeSearchString',
    'createIntegration',
    'hashIntegration',
    'normalizeIntegration',
    'pathIntegration',
    'staticIntegration',
    'useHref',
    'useIsRouting',
    'useLocation',
    'useMatch',
    'useNavigate',
    'useParams',
    'useResolvedPath',
    'useRouteData',
    'useRoutes',
    'useSearchParams'
  ]
})
