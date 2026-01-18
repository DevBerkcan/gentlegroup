import BlogPostLayout from '@/components/BlogPostLayout'

export const metadata = {
  title: 'Webseiten-Sicherheit 2024: Best Practices für Unternehmen | Gentle Group',
  description: 'Schützen Sie Ihre Website vor Hackern! Erfahren Sie die wichtigsten Sicherheitsmaßnahmen: SSL, Firewalls, Updates, Backups und mehr. Praktischer Leitfaden mit Checkliste.',
}

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="Webseiten-Sicherheit 2024: Best Practices für Unternehmen"
      category="Security & Compliance"
      categoryColor="from-red-500 to-orange-600"
      author={{
        name: 'Berk-Can Atesoglu',
        role: 'Security & Architecture'
      }}
      publishDate="22. November 2024"
      readTime="15 min"
      coverImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80"
      content={{
        intro: 'Cyberkriminalität nimmt rasant zu. Jeden Tag werden Tausende Websites gehackt, Daten gestohlen und Unternehmen erpresst. Die gute Nachricht: Die meisten Angriffe lassen sich mit bewährten Sicherheitsmaßnahmen verhindern. In diesem umfassenden Guide zeigen wir Ihnen, wie Sie Ihre Website professionell absichern – von den Grundlagen bis zu fortgeschrittenen Techniken.',
        sections: [
          {
            heading: 'Die häufigsten Sicherheitsbedrohungen verstehen',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
            content: `Bevor wir Schutzmaßnahmen besprechen, müssen wir verstehen, womit wir es zu tun haben. Die Bedrohungslandschaft ist vielfältig.

SQL-Injection: Angreifer schleusen bösartigen SQL-Code ein, um Datenbanken zu kompromittieren. Resultat: Kompletter Datenzugriff, Löschung oder Manipulation. Jede unvalidierte Eingabe ist eine potenzielle Schwachstelle.

Cross-Site-Scripting (XSS): Schadcode wird in Ihre Website injiziert und im Browser anderer User ausgeführt. Cookies werden gestohlen, Sessions gekapert, Nutzer auf Phishing-Seiten umgeleitet. Besonders gefährlich bei User-Generated-Content.

Brute-Force-Angriffe: Automatisierte Tools versuchen systematisch Login-Credentials zu erraten. WordPress-Admin mit "admin/password" ist in Sekunden geknackt. Schwache Passwörter sind ein Haupteinfallstor.

DDoS-Attacken: Ihre Website wird mit Requests überflutet, bis sie zusammenbricht. Resultat: Ausfall, Umsatzverlust, frustrierte Kunden. Oft kombiniert mit Erpressungsversuchen.

Malware & Ransomware: Schadsoftware wird eingeschleust, Daten verschlüsselt, Lösegeld gefordert. Ohne Backup: Totalverlust. Mit Backup: Stunden bis Tage Downtime.

Zero-Day-Exploits: Sicherheitslücken, für die noch kein Patch existiert. Besonders gefährlich, weil unbekannt. Hier hilft nur schnelles Reagieren und gute Monitoring-Tools.

Die Kosten eines Hacks: Durchschnittlich €50.000-200.000 für Bereinigung, Recovery, Reputationsschaden. Bei Datenschutzverletzung: DSGVO-Bußgelder bis €20 Millionen. Plus: Vertrauensverlust bei Kunden.`
          },
          {
            heading: 'HTTPS & SSL/TLS: Die Basis-Absicherung',
            image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80',
            content: `HTTPS ist kein "Nice-to-have" mehr – es ist Pflicht. Ohne verschlüsselte Verbindung werden Daten im Klartext übertragen. Passwörter, Kreditkarten, persönliche Infos – alles lesbar.

SSL/TLS-Zertifikate verschlüsseln die Kommunikation zwischen Browser und Server. Moderne Browser markieren HTTP-Sites als "Nicht sicher" – das schreckt Besucher ab und schadet Ihrem Google-Ranking.

Let's Encrypt bietet kostenlose SSL-Zertifikate mit automatischer Erneuerung. Keine Ausrede mehr für HTTP. Die Installation dauert Minuten, die Sicherheitsverbesserung ist enorm.

Best Practices: Verwenden Sie TLS 1.3 (neuester Standard), deaktivieren Sie alte Protokolle (SSL 3.0, TLS 1.0/1.1), nutzen Sie starke Cipher Suites, implementieren Sie HSTS-Header (erzwingt HTTPS).

HTTP Strict Transport Security (HSTS): Header teilt dem Browser mit, dass Ihre Site IMMER über HTTPS erreichbar sein muss. Verhindert Downgrade-Attacken. Einmal gesetzt, kein Zurück mehr.

Certificate Pinning (fortgeschritten): Für Mobile Apps empfohlen. Der App wird das erwartete Zertifikat mitgegeben. Man-in-the-Middle-Attacken werden verhindert.

Monitoring: Überwachen Sie Ihr Zertifikat-Ablaufdatum! Ein abgelaufenes Zertifikat macht Ihre Site unerreichbar. Tools wie SSL Labs testen Ihre Konfiguration kostenlos.`
          },
          {
            heading: 'Web Application Firewall (WAF): Ihr digitaler Schutzwall',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
            content: `Eine WAF ist Ihr erster Verteidigungsring. Sie analysiert eingehende Requests und blockt verdächtige Aktivitäten, bevor sie Ihre Anwendung erreichen.

Cloudflare, Sucuri oder AWS WAF bieten fertige Lösungen. Sie schützen vor OWASP Top 10 Bedrohungen out-of-the-box. Rate-Limiting stoppt Brute-Force-Angriffe. DDoS-Protection hält Ihre Site bei Angriffen online.

ModSecurity (Open Source): Läuft auf Ihrem Server, gibt Ihnen volle Kontrolle. OWASP Core Rule Set (CRS) deckt häufigste Angriffsmuster ab. Anpassbar für Custom-Applications.

Wie eine WAF funktioniert: Request-Inspection (Header, Body, Parameter), Pattern-Matching gegen Signaturdatenbank, Geo-Blocking (blockt Länder), Bot-Detection (unterscheidet Mensch/Bot), Rate-Limiting (max. X Requests pro Minute).

False Positives: Problem bei zu aggressiven Regeln. Legitime User werden geblockt. Lösung: Whitelist für bekannte IPs, Custom-Rules für Ihre Anwendung, Monitoring & Tuning.

WAF-Logs: Goldmine für Security-Audits. Analysieren Sie geblockte Requests. Muster erkennen. Sind neue Angriffsvektoren im Spiel? Müssen Rules angepasst werden?

Cloud-WAF vs. On-Premise: Cloud (Cloudflare) ist einfacher, schneller deployed, automatische Updates. On-Premise (ModSecurity) gibt mehr Kontrolle, keine externen Abhängigkeiten, DSGVO-konformer.`
          },
          {
            heading: 'Authentifizierung & Zugriffskontrolle: Die goldenen Regeln',
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80',
            content: `Schwache Authentifizierung ist das #1 Einfallstor für Hacker. "admin/admin" ist keine akzeptable Login-Kombination mehr – war es nie.

Starke Passwort-Policies: Mindestens 12 Zeichen, Groß-/Kleinbuchstaben, Zahlen, Sonderzeichen. Keine Dictionary-Words. Passwort-Manager für Team nutzen (1Password, Bitwarden).

Multi-Faktor-Authentifizierung (MFA): IMMER aktivieren! Google Authenticator, Microsoft Authenticator oder Hardware-Token (YubiKey). Selbst wenn Passwort kompromittiert: 2. Faktor schützt.

Login-Versuche limitieren: Nach 3-5 falschen Versuchen: Account temporär sperren. Captcha einsetzen. IP-basiertes Throttling. Stoppt automatisierte Brute-Force-Angriffe.

Session-Management: Timeouts nach Inaktivität (15-30 Min.), Secure & HttpOnly Flags für Cookies, Session-Regeneration nach Login, Logout-Funktionalität prominent platzieren.

Principle of Least Privilege: Jeder User nur die Rechte, die er wirklich braucht. Nicht jeder braucht Admin-Zugriff. Role-Based-Access-Control (RBAC) implementieren.

API-Keys & Tokens: Niemals in Code committen! Environment-Variables nutzen. Tokens mit Ablaufdatum. JWT mit Refresh-Token-Pattern. Rate-Limiting für APIs.

SSH-Zugriff: Public-Key-Authentication statt Passwort. Root-Login deaktivieren. Fail2Ban gegen Brute-Force. SSH-Port ändern (von 22 auf custom). Nur bekannte IPs whitelisten.`
          },
          {
            heading: 'Updates, Patches & Dependency-Management',
            image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80',
            content: `Ungepatchte Software ist ein offenes Scheunentor. Die meisten Hacks nutzen BEKANNTE Schwachstellen, für die längst Patches existieren.

CMS-Updates (WordPress, Typo3, Drupal): Core-Updates zeitnah installieren (innerhalb 48h bei Security-Patches). Plugin/Theme-Updates wöchentlich prüfen. Deprecated-Plugins deinstallieren.

Dependency-Scanning: npm audit, Snyk oder Dependabot scannen Ihre Dependencies auf bekannte Vulnerabilities. Automatische Pull Requests mit Updates. CI/CD-Integration Pflicht.

Server-Updates: OS-Security-Patches automatisiert einspielen (unattended-upgrades auf Ubuntu). Aber: Nicht blind auto-updaten in Production – Test-Stage zuerst!

Update-Strategie: Staging-Environment für Tests, Backup VOR jedem Update, Update-Log führen (was, wann, von wem), Rollback-Plan bereit, kritische Updates priorisieren.

Breaking Changes: Major-Updates können Inkompatibilitäten bringen. Testing ist essentiell. WordPress 6.0 → 6.1 meist safe. PHP 7 → PHP 8 kann brechen. Planen!

End-of-Life (EOL): Software, die nicht mehr supportet wird, ist ein Security-Risiko. PHP 7.4 ist EOL seit November 2022. Keine Security-Patches mehr. Upgrade ASAP.

Vulnerability Databases: CVE (Common Vulnerabilities and Exposures) durchsuchen. NVD (National Vulnerability Database). Alerts abonnieren für Ihre Stack.`
          },
          {
            heading: 'Backups & Disaster Recovery: Ihr Sicherheitsnetz',
            image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80',
            content: `Nicht OB Sie gehackt werden, sondern WANN. Backups sind Ihre Lebensversicherung. Ohne Backup: Game Over bei Ransomware.

3-2-1-Backup-Regel: 3 Kopien Ihrer Daten, 2 verschiedene Medien (Disk + Cloud), 1 Kopie offsite (anderes Rechenzentrum). Minimiert Risiko von Totalverlust.

Backup-Frequenz: Business-kritisch: Stündlich. E-Commerce: Täglich. Firmenwebsite: Wöchentlich. PLUS: Inkrementelle Backups für Effizienz.

Was muss gesichert werden? Datenbank (MySQL-Dumps), Dateien (Code, Uploads), Konfiguration (nginx, Apache), Server-State (für Disaster-Recovery), Secrets (verschlüsselt!).

Backup-Retention: Nicht nur 1 Backup! 30 Daily, 12 Monthly, 7 Yearly Backups. Ermöglicht Point-in-Time-Recovery. Ransomware wurde oft Wochen vorher eingeschleust.

Backups TESTEN: Ungetestetes Backup = kein Backup. Quarterly Restore-Tests. Dokumentieren Sie den Recovery-Prozess. RTO (Recovery Time Objective) definieren: Wie schnell MUSS ich wieder online sein?

Verschlüsselung: Backups enthalten sensible Daten. Verschlüsselung Pflicht! AES-256. Keys separat speichern (nicht auf dem Backup-Server!).

Backup-Monitoring: Alerts bei fehlgeschlagenen Backups. Integrity-Checks (Checksums). Nicht blind vertrauen – Backups können korrupt sein.

Cloud-Backup-Lösungen: AWS S3 + Glacier für Archiv, Azure Backup, Google Cloud Storage. Oder managed: Veeam, Acronis, BackWPup (für WordPress).`
          },
          {
            heading: 'Security-Checkliste: Ihre Action-Items',
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80',
            content: `Zusammenfassung: Was müssen Sie JETZT tun? Hier Ihre Security-Checkliste zum Abhaken.

SOFORT (Kritisch):
☐ HTTPS aktiviert mit gültigem SSL-Zertifikat
☐ Starke Passwörter für alle Admin-Accounts
☐ Multi-Faktor-Authentifizierung (MFA) aktiv
☐ CMS & Plugins auf aktuellstem Stand
☐ Tägliches automatisches Backup läuft
☐ WAF (Cloudflare/Sucuri) aktiv

DIESE WOCHE (Wichtig):
☐ Login-Limitierung implementiert
☐ Malware-Scanner installiert & Scan durchgeführt
☐ Backup-Restore getestet
☐ Ungenutzzte Plugins/Themes deinstalliert
☐ File-Permissions geprüft (644 für Files, 755 für Folders)
☐ SSH-Keys statt Passwörter für Server-Zugriff

DIESEN MONAT (Wichtig):
☐ Security-Audit durchgeführt
☐ Dependency-Scan (npm audit, etc.)
☐ CSP (Content Security Policy) Header implementiert
☐ Security-Headers geprüft (HSTS, X-Frame-Options, etc.)
☐ Monitoring & Alerting eingerichtet
☐ DSGVO-Compliance überprüft
☐ Incident-Response-Plan dokumentiert

VIERTELJÄHRLICH (Wartung):
☐ Penetration-Test durch Experten
☐ Review aller User-Berechtigungen
☐ Server-Logs analysiert
☐ Security-Training für Team

Tools für Security-Check:
- SSL Labs (https://www.ssllabs.com) – SSL-Konfiguration testen
- Security Headers (https://securityheaders.com) – HTTP-Headers prüfen
- OWASP ZAP – Vulnerability-Scanning
- Sucuri SiteCheck – Malware-Scan
- Google Safe Browsing – Blacklist-Check

Bei Gentle Group bieten wir professionelle Security-Audits und implementieren alle diese Maßnahmen für Ihre Website. Lassen Sie uns Ihre digitale Sicherheit auf das nächste Level heben!`
          }
        ],
        conclusion: 'Webseiten-Sicherheit ist ein Marathon, kein Sprint. Die Bedrohungslandschaft entwickelt sich ständig weiter, und Ihre Sicherheitsmaßnahmen müssen mithalten. Mit den richtigen Tools, Prozessen und einem proaktiven Ansatz können Sie das Risiko minimieren und Ihr Unternehmen schützen. Investieren Sie in Sicherheit – die Kosten eines Hacks sind immer höher. Bei Gentle Group ist Security keine Nebensache, sondern integraler Bestandteil jedes Projekts. Kontaktieren Sie uns für ein kostenloses Security-Assessment Ihrer Website!'
      }}
    />
  )
}
