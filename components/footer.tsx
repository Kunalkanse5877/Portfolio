export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black mb-2">
              Kunal <span className="text-primary">Kanse</span>
            </div>
            <p className="text-muted-foreground">Designing visuals, interfaces, and stories</p>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; 2024 Kunal Kanse. All rights reserved.</p>
            <p className="mt-1">Built with passion and precision</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
