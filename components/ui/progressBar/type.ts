export type ProgressBarSize = "sm" | "md" | "lg";
export type ProgressBarColor =  "primary" | "success" | "warning" | "error";

export interface ProgressBarProps {
  /** Valor entre 0 y 1. Por defecto: 0 */
  progress?: number;
  /** Variante de tamaño que aplica clases Tailwind. Por defecto: 'md' */
  size?: ProgressBarSize;
  /** Color de la barra (mapeado a clases Tailwind). Por defecto: 'primary' */
  color?: ProgressBarColor;
  /** Clase adicional para el contenedor */
  className?: string;
}
