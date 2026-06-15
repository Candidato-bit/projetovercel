document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Base de Dados em Memória (Para Simulação)
       ========================================================================== */
    
    // Cursos e Disciplinas (Grade Curricular)
    const cursosDB = {
        "informática de gestão": {
            codigo: "INF_GEST",
            perfil: "O técnico médio em Informática de Gestão desenvolve competências para auditar e gerir sistemas computacionais complexos, desenhar bases de dados e implementar soluções de software que otimizem as tomadas de decisões e operações corporativas de qualquer organização.",
            disciplinas: [
                "Introdução à Programação (Python)",
                "Arquitetura de Computadores e Sistemas",
                "Estruturas de Dados e Algoritmos",
                "Álgebra Linear e Geometria Analítica",
                "Fundamentos de Gestão de Empresas",
                "Sistemas de Gestão de Bases de Dados",
                "Redes e Comunicações de Computadores",
                "Engenharia de Software Avançada"
            ],
            dashboard: {
                notas: [
                    { cadeira: "Introdução à Programação", nota: 16.5 },
                    { cadeira: "Sistemas de Bases de Dados", nota: 14.0 },
                    { cadeira: "Fundamentos de Gestão", nota: 12.0 },
                    { cadeira: "Álgebra Linear", nota: 11.5 }
                ],
                assiduidade: [
                    { cadeira: "Introdução à Programação", total: 40, faltas: 2 },
                    { cadeira: "Sistemas de Bases de Dados", total: 32, faltas: 6 },
                    { cadeira: "Fundamentos de Gestão", total: 32, faltas: 0 },
                    { cadeira: "Álgebra Linear", total: 40, faltas: 8 }
                ],
                matriculas: [
                    "Engenharia de Software (2º Semestre)",
                    "Redes de Computadores (2º Semestre)",
                    "Investigação Operacional (2º Semestre)",
                    "Contabilidade Financeira (2º Semestre)"
                ]
            }
        },
        "contabilidade e gestão": {
            codigo: "CONT_GEST",
            perfil: "O técnico médio em Contabilidade e Gestão está preparado para estruturar a contabilidade financeira, realizar auditorias fiscais e governamentais, desenhar estratégias de controle de custos e fornecer dados de contabilidade de gestão que apoiem a alta liderança executiva.",
            disciplinas: [
                "Contabilidade Financeira Geral I",
                "Microeconomia e Análise de Mercado",
                "Direito Comercial e das Sociedades",
                "Estatística Descritiva Aplicada",
                "Contabilidade de Custos e Gestão",
                "Fiscalidade Angolana e IVA",
                "Auditoria Financeira Externa",
                "Planeamento e Controlo Orçamental"
            ],
            dashboard: {
                notas: [
                    { cadeira: "Contabilidade Geral I", nota: 15.0 },
                    { cadeira: "Microeconomia I", nota: 13.5 },
                    { cadeira: "Direito Comercial", nota: 16.0 },
                    { cadeira: "Estatística Aplicada", nota: 12.0 }
                ],
                assiduidade: [
                    { cadeira: "Contabilidade Geral I", total: 40, faltas: 1 },
                    { cadeira: "Microeconomia I", total: 32, faltas: 3 },
                    { cadeira: "Direito Comercial", total: 32, faltas: 0 },
                    { cadeira: "Estatística Aplicada", total: 40, faltas: 2 }
                ],
                matriculas: [
                    "Contabilidade de Custos (2º Semestre)",
                    "Fiscalidade Angolana (2º Semestre)",
                    "Auditoria Financeira (2º Semestre)",
                    "Matemática Financeira (2º Semestre)"
                ]
            }
        },
        "finanças": {
            codigo: "FINANCAS",
            perfil: "O técnico médio em Finanças possui ferramentas analíticas profundas para gerir tesourarias complexas, operar em mercados de capitais, auditar riscos financeiros em instituições bancárias e avaliar projetos de investimento público e privado.",
            disciplinas: [
                "Cálculo e Matemática Financeira",
                "Macroeconomia e Políticas Públicas",
                "Análise das Demonstrações Financeiras",
                "Finanças Corporativas Avançadas",
                "Gestão de Carteiras de Investimento",
                "Mercados Financeiros e de Derivados",
                "Gestão de Riscos e Seguros",
                "Avaliação de Projetos de Investimento"
            ],
            dashboard: {
                notas: [
                    { cadeira: "Cálculo Financeiro", nota: 14.5 },
                    { cadeira: "Macroeconomia", nota: 12.0 },
                    { cadeira: "Análise Financeira", nota: 15.5 },
                    { cadeira: "Estatística Aplicada", nota: 13.0 }
                ],
                assiduidade: [
                    { cadeira: "Cálculo Financeiro", total: 40, faltas: 4 },
                    { cadeira: "Macroeconomia", total: 32, faltas: 5 },
                    { cadeira: "Análise Financeira", total: 32, faltas: 1 },
                    { cadeira: "Estatística Aplicada", total: 40, faltas: 3 }
                ],
                matriculas: [
                    "Finanças Corporativas (2º Semestre)",
                    "Mercados Financeiros (2º Semestre)",
                    "Gestão de Riscos (2º Semestre)",
                    "Avaliação de Investimentos (2º Semestre)"
                ]
            }
        }
    };

    // Alunos pré-registados e ativos (Simulação de Base de Dados de Login)
    const alunosDB = [
        {
            id: "1",
            numero: "20261001",
            email: "aluno.teste@ipsantalucia.edu.ao",
            nome: "António Manuel Cassua",
            curso: "Informática de Gestão",
            passwordHash: "Password123!", // password pré-definida em plain text para simplicidade da demo
            estado: "Ativo",
            propinas: [
                { mes: "Março 2026", valor: 25000, pago: true, data: "05/03/2026", ref: "REF-928372" },
                { mes: "Abril 2026", valor: 25000, pago: true, data: "08/04/2026", ref: "REF-039482" },
                { mes: "Maio 2026", valor: 25000, pago: false, data: null, ref: null },
                { mes: "Junho 2026", valor: 25000, pago: false, data: null, ref: null }
            ]
        }
    ];

    // Inbox de E-mails Simulada
    const inboxDB = [];

    /* ==========================================================================
       2. Lógica Geral da Página (Navbar, Mobile Menu, Slider, Intersection Observer)
       ========================================================================== */

    // Efeito Scrolled na Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Toggle Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const navLinksMenu = document.getElementById('nav-links-menu');
    const navLinksItems = navLinksMenu.querySelectorAll('a');

    mobileMenuBtn.addEventListener('click', () => {
        navLinksMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinksMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinksMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        });
    });

    // Slider / Carousel do Hero
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlideShow() {
        stopSlideShow();
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideShow() {
        if (slideInterval) clearInterval(slideInterval);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startSlideShow();
        });
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startSlideShow();
        });
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                showSlide(parseInt(dot.getAttribute('data-index')));
                startSlideShow();
            });
        });
        startSlideShow();
    }

    // Accordion de "O Instituto"
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Fecha todos
            document.querySelectorAll('.accordion-item').forEach(acc => acc.classList.remove('active'));
            
            // Abre se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Intersection Observer para animações ao fazer scroll
    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    animatedElements.forEach(el => appearOnScroll.observe(el));


    /* ==========================================================================
       3. Sistema de Notificações Toast
       ========================================================================== */
    const toast = document.getElementById('toast-notif');
    const toastIcon = document.getElementById('toast-icon');
    const toastTitle = document.getElementById('toast-title');
    const toastDesc = document.getElementById('toast-desc');
    let toastTimeout;

    function showToast(title, desc, type = 'success') {
        clearTimeout(toastTimeout);
        
        // Remove classes antigas
        toast.className = 'toast-notification';
        
        if (type === 'success') {
            toastIcon.className = 'fas fa-check-circle';
        } else if (type === 'error') {
            toast.classList.add('error-toast');
            toastIcon.className = 'fas fa-exclamation-triangle';
        } else if (type === 'info') {
            toast.classList.add('info-toast');
            toastIcon.className = 'fas fa-info-circle';
        }
        
        toastTitle.innerText = title;
        toastDesc.innerText = desc;
        
        toast.classList.add('show');
        
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }


    /* ==========================================================================
       4. Modal de Detalhes dos Cursos
       ========================================================================== */
    const modalCurso = document.getElementById('modal-detalhes-curso');
    const btnVerPlano = document.querySelectorAll('.btn-ver-detalhes-curso');
    const btnFecharCurso = document.getElementById('btn-fechar-modal-curso');

    btnVerPlano.forEach(btn => {
        btn.addEventListener('click', () => {
            const cursoNome = btn.getAttribute('data-curso');
            const cursoObj = cursosDB[cursoNome];
            
            if (cursoObj) {
                document.getElementById('cd-title').innerText = btn.parentElement.querySelector('h3').innerText;
                document.getElementById('cd-code').innerText = `Código Oficial: ${cursoObj.codigo} | MED`;
                document.getElementById('cd-profile').innerText = cursoObj.perfil;
                
                // Curriculum list
                const curriculumList = document.getElementById('cd-curriculum-list');
                curriculumList.innerHTML = '';
                cursoObj.disciplinas.forEach(disc => {
                    const item = document.createElement('div');
                    item.className = 'curriculum-item';
                    item.innerText = disc;
                    curriculumList.appendChild(item);
                });
                
                modalCurso.classList.add('show');
            }
        });
    });

    btnFecharCurso.addEventListener('click', () => {
        modalCurso.classList.remove('show');
    });


    /* ==========================================================================
       5. Portal de Inscrições Online (Candidaturas)
       ========================================================================== */
    const modalCandidatura = document.getElementById('modal-inscricoes-candidatura');
    const btnsAbrirCandidatura = document.querySelectorAll('.btn-abrir-candidatura');
    const btnFecharCandidatura = document.getElementById('btn-fechar-modal-candidatura');
    const formCandidatura = document.getElementById('form-candidatura-online');
    
    // Abrir modal
    btnsAbrirCandidatura.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalCandidatura.classList.add('show');
        });
    });

    // Fechar modal
    btnFecharCandidatura.addEventListener('click', () => {
        modalCandidatura.classList.remove('show');
    });

    // Upload de arquivos (feedback visual)
    const fileInputs = [
        { inputId: 'file-bi', cardId: 'up-card-bi', statusId: 'status-bi' },
        { inputId: 'file-certificado', cardId: 'up-card-certificado', statusId: 'status-certificado' },
        { inputId: 'file-medico', cardId: 'up-card-medico', statusId: 'status-medico' },
        { inputId: 'file-foto', cardId: 'up-card-foto', statusId: 'status-foto' },
        { inputId: 'file-pagamento', cardId: 'up-card-pagamento', statusId: 'status-pagamento' }
    ];

    fileInputs.forEach(item => {
        const fileIn = document.getElementById(item.inputId);
        const card = document.getElementById(item.cardId);
        const status = document.getElementById(item.statusId);

        fileIn.addEventListener('change', () => {
            if (fileIn.files.length > 0) {
                const fileName = fileIn.files[0].name;
                status.innerText = fileName;
                card.classList.add('active');
            } else {
                status.innerText = "Nenhum ficheiro selecionado";
                card.classList.remove('active');
            }
        });
    });

    // Submissão do formulário de candidatura
    const modalComprovativo = document.getElementById('modal-comprovativo-candidatura');
    const btnFecharComprovativo = document.getElementById('btn-fechar-comprovativo');
    const btnConcluirCandidatura = document.getElementById('btn-concluir-candidatura');
    const btnImprimir = document.getElementById('btn-imprimir-comprovativo');

    formCandidatura.addEventListener('submit', (e) => {
        e.preventDefault();

        // Gerar número de candidatura único
        const randNum = Math.floor(1000 + Math.random() * 9000);
        const numCandidatura = `CAND-2026-${randNum}`;
        const dataSubmissao = new Date().toLocaleString('pt-PT');

        // Valores inseridos
        const nome = document.getElementById('cand-nome').value;
        const bi = document.getElementById('cand-bi').value;
        const nascimento = document.getElementById('cand-data-nascimento').value;
        const email = document.getElementById('cand-email').value;
        const telefone = document.getElementById('cand-telefone').value;
        const curso = document.getElementById('cand-curso').value;
        const escola = document.getElementById('cand-escola').value;
        const media = document.getElementById('cand-media').value;

        // Atribuir valores ao Comprovativo Modal
        document.getElementById('comp-val-numero').innerText = numCandidatura;
        document.getElementById('comp-val-numero-inst').innerText = numCandidatura;
        document.getElementById('comp-val-nome').innerText = nome;
        document.getElementById('comp-val-bi').innerText = bi;
        document.getElementById('comp-val-nascimento').innerText = nascimento;
        document.getElementById('comp-val-email').innerText = email;
        document.getElementById('comp-val-telefone').innerText = telefone;
        document.getElementById('comp-val-curso').innerText = curso;
        document.getElementById('comp-val-escola').innerText = escola;
        document.getElementById('comp-val-media').innerText = parseFloat(media).toFixed(2);
        document.getElementById('comp-val-data').innerText = dataSubmissao;

        // Ficheiros
        document.getElementById('comp-file-bi').innerText = document.getElementById('file-bi').files[0].name;
        document.getElementById('comp-file-cert').innerText = document.getElementById('file-certificado').files[0].name;
        document.getElementById('comp-file-med').innerText = document.getElementById('file-medico').files[0].name;
        document.getElementById('comp-file-foto').innerText = document.getElementById('file-foto').files[0].name;
        document.getElementById('comp-file-pag').innerText = document.getElementById('file-pagamento').files[0].name;

        // Barcode text
        document.getElementById('barcode-text').innerText = `CAND2026${randNum}${bi.slice(0, 4).toUpperCase()}`;

        // Fechar modal de formulário e abrir o de comprovativo
        modalCandidatura.classList.remove('show');
        modalComprovativo.classList.add('show');
        
        showToast("Inscrição Submetida!", "Seus documentos estão sob análise da secretaria académica.");
        
        // Reset do formulário
        formCandidatura.reset();
        fileInputs.forEach(item => {
            document.getElementById(item.cardId).classList.remove('active');
            document.getElementById(item.statusId).innerText = "Nenhum ficheiro selecionado";
        });
    });

    btnFecharComprovativo.addEventListener('click', () => {
        modalComprovativo.classList.remove('show');
    });

    btnConcluirCandidatura.addEventListener('click', () => {
        modalComprovativo.classList.remove('show');
    });

    // Imprimir comprovativo
    btnImprimir.addEventListener('click', () => {
        window.print();
    });


    /* ==========================================================================
       6. Módulo de Eventos & CMS Admin
       ========================================================================== */
    const eventsGrid = document.getElementById('events-grid-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const formCriarEvento = document.getElementById('form-criar-evento');

    // Filtrar Eventos
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            const eventCards = eventsGrid.querySelectorAll('.event-card');

            eventCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const status = card.getAttribute('data-status');

                if (filterValue === 'todos') {
                    card.style.display = 'block';
                } else if (filterValue === 'breve') {
                    if (status === 'breve') {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                } else {
                    if (category === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Download Edital Simulado
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-download-edital')) {
            e.preventDefault();
            showToast("Descarregando Edital", "Ficheiro PDF com as normas académicas foi transferido.", "info");
        }
    });

    // Submissão de Artigo Científico (Modal)
    const modalArtigo = document.getElementById('modal-submeter-artigo');
    const btnFecharArtigo = document.getElementById('btn-fechar-modal-artigo');
    const formArtigo = document.getElementById('form-submeter-artigo-cientifico');
    const fileArtigo = document.getElementById('file-artigo-pdf');
    const cardArtigo = fileArtigo.parentElement;
    const statusArtigo = document.getElementById('status-artigo-pdf');

    // Mapeamento dos botões dinâmicos de submissão
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-submit-abstract')) {
            const eventTitle = e.target.getAttribute('data-event-title');
            document.getElementById('art-event-target').innerText = `Evento: ${eventTitle}`;
            document.getElementById('art-event-title-hidden').value = eventTitle;
            modalArtigo.classList.add('show');
        }
    });

    fileArtigo.addEventListener('change', () => {
        if (fileArtigo.files.length > 0) {
            statusArtigo.innerText = fileArtigo.files[0].name;
            cardArtigo.classList.add('active');
        } else {
            statusArtigo.innerText = "Nenhum ficheiro selecionado";
            cardArtigo.classList.remove('active');
        }
    });

    btnFecharArtigo.addEventListener('click', () => {
        modalArtigo.classList.remove('show');
    });

    formArtigo.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const randSub = Math.floor(100 + Math.random() * 900);
        const subCode = `SUB-ART-2026-${randSub}`;
        
        modalArtigo.classList.remove('show');
        showToast("Artigo Submetido!", `Código: ${subCode}. Enviada confirmação para o seu e-mail.`);
        
        formArtigo.reset();
        cardArtigo.classList.remove('active');
        statusArtigo.innerText = "Nenhum ficheiro selecionado";
    });

    // Secretaria CMS: Criar Novo Evento
    formCriarEvento.addEventListener('submit', (e) => {
        e.preventDefault();

        const titulo = document.getElementById('ev-titulo').value;
        const categoria = document.getElementById('ev-categoria').value;
        const dataRaw = document.getElementById('ev-data').value;
        const hora = document.getElementById('ev-hora').value;
        const local = document.getElementById('ev-local').value;
        const oradores = document.getElementById('ev-oradores').value || "N/A";
        const desc = document.getElementById('ev-desc').value;

        // Formatação de data
        const dataObj = new Date(dataRaw);
        const dia = dataObj.getDate().toString().padStart(2, '0');
        const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
        const mes = meses[dataObj.getMonth()];

        // Criar elemento do cartão de evento
        const eventCard = document.createElement('div');
        eventCard.className = `event-card ${categoria}`;
        eventCard.setAttribute('data-category', categoria);
        eventCard.setAttribute('data-status', 'breve');

        // Badge html
        const badgeHTML = categoria === 'cientifico' 
            ? `<div class="event-badge cientifico-badge"><i class="fas fa-atom"></i> Científico</div>` 
            : `<div class="event-badge cultural-badge"><i class="fas fa-guitar"></i> Cultural</div>`;

        // Cientifico actions html
        const actionsHTML = categoria === 'cientifico'
            ? `<div class="scientific-actions">
                <a href="#" class="btn-download-edital"><i class="fas fa-file-pdf"></i> Descarregar Edital</a>
                <button class="btn-submit-abstract" data-event-title="${titulo}"><i class="fas fa-upload"></i> Submeter Artigo</button>
               </div>`
            : '';

        eventCard.innerHTML = `
            ${badgeHTML}
            <div class="event-content">
                <div class="event-date-box">
                    <span class="day">${dia}</span>
                    <span class="month">${mes}</span>
                </div>
                <div class="event-details">
                    <h3>${titulo}</h3>
                    <p class="event-meta"><i class="far fa-clock"></i> ${hora} | <i class="fas fa-map-marker-alt"></i> ${local}</p>
                    <p class="event-desc">${desc}</p>
                    <div class="event-speakers">
                        <strong>Organizadores/Oradores:</strong> ${oradores}
                    </div>
                    ${actionsHTML}
                </div>
            </div>
        `;

        // Inserir no topo da grelha de eventos
        eventsGrid.insertBefore(eventCard, eventsGrid.firstChild);

        showToast("Evento Publicado!", "O novo evento já se encontra visível na agenda pública.", "success");
        formCriarEvento.reset();
        
        // Simular o filtro "todos" ativo para mostrar o novo evento
        document.getElementById('filter-btn-all').click();
    });


    /* ==========================================================================
       7. Portal do Aluno Workspace (Secretaria -> Ativação -> Dashboard)
       ========================================================================== */
    const wTabs = document.querySelectorAll('#workspace-tabs-control .w-tab');
    const wContents = document.querySelectorAll('.workspace-content-wrapper .w-content');

    // Navegação pelas abas do Workspace do simulador
    wTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            
            wTabs.forEach(t => t.classList.remove('active'));
            wContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Passo 1: Formulário da Secretaria (Pré-Registo)
    const formSecretaria = document.getElementById('form-secretaria-cadastro');
    const inboxList = document.getElementById('inbox-list-emails');
    const emptyInboxMsg = document.getElementById('empty-inbox-msg');

    formSecretaria.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('sec-nome').value;
        const email = document.getElementById('sec-email').value;
        const numero = document.getElementById('sec-numero').value;
        const curso = document.getElementById('sec-curso').value;

        // 1. Validar se o aluno já existe na nossa BD em memória
        const alunoExistente = alunosDB.find(a => a.numero === numero || a.email === email);
        if (alunoExistente) {
            showToast("Erro de Pré-Registo", "Número de estudante ou e-mail já se encontra cadastrado.", "error");
            return;
        }

        // 2. Criar novo aluno na BD em estado Pendente
        const novoAluno = {
            id: (alunosDB.length + 1).toString(),
            numero: numero,
            email: email,
            nome: nome,
            curso: curso,
            passwordHash: null, // pendente
            estado: "Pendente_Ativacao",
            propinas: [
                { mes: "Março 2026", valor: 25000, pago: false, data: null, ref: null },
                { mes: "Abril 2026", valor: 25000, pago: false, data: null, ref: null },
                { mes: "Maio 2026", valor: 25000, pago: false, data: null, ref: null },
                { mes: "Junho 2026", valor: 25000, pago: false, data: null, ref: null }
            ]
        };
        alunosDB.push(novoAluno);

        // 3. Simular geração de token JWT
        const mockJWTToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbHVub0lkIjoi${novoAluno.id}IiwiaW5zdCI6IklQU0wifQ.sig`;

        // 4. Remover mensagem de inbox vazia
        if (emptyInboxMsg) emptyInboxMsg.style.display = 'none';

        // 5. Adicionar email dinâmico à Caixa de Entrada Simulada
        const timeNow = new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
        const emailItem = document.createElement('div');
        emailItem.className = 'email-item unread';
        emailItem.setAttribute('data-student-id', novoAluno.id);
        emailItem.setAttribute('data-token', mockJWTToken);
        emailItem.innerHTML = `
            <div class="email-item-header">
                <span>secretaria@ipsantalucia.edu.ao</span>
                <span class="time">${timeNow}</span>
            </div>
            <h5>Ativação de Acesso Académico - IP Santa Lúcia</h5>
            <p>Olá ${nome}, proceda com a ativação da sua Área Reservada...</p>
        `;
        inboxList.insertBefore(emailItem, inboxList.firstChild);

        // Armazenar na BD do inbox para recarregar clicks
        inboxDB.push({
            studentId: novoAluno.id,
            token: mockJWTToken,
            nome: nome,
            numero: numero,
            email: email
        });

        showToast("Aluno Pré-Registado!", "E-mail com link de ativação temporário foi gerado na Caixa de Entrada.");
        formSecretaria.reset();

        // Ir para a aba de Caixa de Entrada automaticamente
        document.getElementById('tab-btn-mail').click();
    });

    // Lógica do Leitor de E-mails da Caixa de Entrada
    const emailViewer = document.getElementById('email-viewer-content');
    
    document.addEventListener('click', (e) => {
        const emailItem = e.target.closest('.email-item');
        if (emailItem) {
            // Remove unread class
            emailItem.classList.remove('unread');
            
            const studentId = emailItem.getAttribute('data-student-id');
            const token = emailItem.getAttribute('data-token');
            const student = alunosDB.find(a => a.id === studentId);

            if (student) {
                const timeStr = new Date().toLocaleDateString('pt-PT') + ' ' + new Date().toLocaleTimeString('pt-PT');
                emailViewer.innerHTML = `
                    <div class="email-body-box">
                        <h3>Ativação de Acesso Académico - Portal do Aluno IP Santa Lúcia</h3>
                        <div class="email-meta-header">
                            <div>
                                <strong>De:</strong> Secretaria Geral &lt;secretaria@ipsantalucia.edu.ao&gt;<br>
                                <strong>Para:</strong> ${student.nome} &lt;${student.email}&gt;
                            </div>
                            <div>${timeStr}</div>
                        </div>
                        <div class="email-html-content">
                            <p>Estimado(a) estudante <strong>${student.nome}</strong>,</p>
                            <p>O seu registo no sistema de gestão académica do Instituto Politécnico Santa Lúcia foi efetuado previamente pela administração.</p>
                            <p>Para aceder à sua Área Reservada (Dashboard) e consultar as suas notas, assiduidade, propinas e disciplinas, necessita de ativar a sua conta definindo uma palavra-passe de acesso forte.</p>
                            <p>Utilize o link seguro temporário (válido por 24 horas) clicando no botão abaixo:</p>
                            
                            <p style="text-align: center;">
                                <a href="#" class="activation-email-btn" id="btn-email-activate-trigger" data-student-id="${student.id}" data-token="${token}">Ativar Minha Conta Académica <i class="fas fa-key"></i></a>
                            </p>
                            
                            <p>Se tiver problemas com este link, por favor contacte o apoio técnico ou a secretaria pelo número de telefone +244 944405037.</p>
                            <br>
                            <p>Com os melhores cumprimentos,<br><strong>Secretaria Académica do Instituto Politécnico Santa Lúcia</strong></p>
                        </div>
                    </div>
                `;
            }
        }
    });

    // Ecrã de ativação através do clique no link do E-mail
    const modalAtivacao = document.getElementById('modal-ativacao-conta');
    
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'btn-email-activate-trigger') {
            e.preventDefault();
            const studentId = e.target.getAttribute('data-student-id');
            const student = alunosDB.find(a => a.id === studentId);

            if (student) {
                document.getElementById('activation-student-name').innerText = student.nome;
                document.getElementById('activation-student-id').value = student.id;
                
                // Abre o modal de definição de password
                modalAtivacao.classList.add('show');
            }
        }
    });

    // Validação de Senha Forte em Tempo Real (Ativação)
    const actPassword = document.getElementById('act-password');
    const reqLength = document.getElementById('req-length');
    const reqUpper = document.getElementById('req-upper');
    const reqLower = document.getElementById('req-lower');
    const reqNumber = document.getElementById('req-number');
    const reqSymbol = document.getElementById('req-symbol');

    actPassword.addEventListener('input', () => {
        const val = actPassword.value;
        
        // Regras
        const isLengthValid = val.length >= 12;
        const isUpperValid = /[A-Z]/.test(val);
        const isLowerValid = /[a-z]/.test(val);
        const isNumberValid = /[0-9]/.test(val);
        const isSymbolValid = /[@$!%*?&]/.test(val);

        // Feedback visual
        toggleRule(reqLength, isLengthValid);
        toggleRule(reqUpper, isUpperValid);
        toggleRule(reqLower, isLowerValid);
        toggleRule(reqNumber, isNumberValid);
        toggleRule(reqSymbol, isSymbolValid);
    });

    function toggleRule(element, isValid) {
        const icon = element.querySelector('i');
        if (isValid) {
            element.classList.add('valid');
            icon.className = 'fas fa-check-circle';
        } else {
            element.classList.remove('valid');
            icon.className = 'far fa-circle';
        }
    }

    // Submissão do Formulário de Ativação (Definição de Password)
    const formDefinirSenha = document.getElementById('form-definir-senha');
    const actConfirmPassword = document.getElementById('act-confirm-password');
    const pwMatchError = document.getElementById('pw-match-error');

    formDefinirSenha.addEventListener('submit', (e) => {
        e.preventDefault();

        const studentId = document.getElementById('activation-student-id').value;
        const password = actPassword.value;
        const confirmPassword = actConfirmPassword.value;

        // Validar se coincidem
        if (password !== confirmPassword) {
            pwMatchError.style.display = 'block';
            return;
        } else {
            pwMatchError.style.display = 'none';
        }

        // Validar requisitos de força novamente
        const isStrong = password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[@$!%*?&]/.test(password);
        if (!isStrong) {
            showToast("Password Insuficiente", "A palavra-passe deve cumprir todos os critérios de segurança.", "error");
            return;
        }

        // Salvar a senha forte e ativar na BD simulada
        const student = alunosDB.find(a => a.id === studentId);
        if (student) {
            student.passwordHash = password;
            student.estado = "Ativo";

            modalAtivacao.classList.remove('show');
            showToast("Conta Ativada!", "Efetue login com as suas credenciais no portal.", "success");
            
            // Pre-preencher ecrã de login
            document.getElementById('log-identificador').value = student.numero;
            document.getElementById('log-password').value = '';

            // Reset do formulário de ativação
            formDefinirSenha.reset();
            document.querySelectorAll('.password-strength-checker li').forEach(li => {
                li.classList.remove('valid');
                li.querySelector('i').className = 'far fa-circle';
            });

            // Ir para aba de Login
            document.getElementById('tab-btn-log').click();
        }
    });

    // Mostrar/Ocultar password no formulário de login
    const btnTogglePw = document.getElementById('btn-toggle-pw');
    const logPassword = document.getElementById('log-password');

    btnTogglePw.addEventListener('click', () => {
        const type = logPassword.type === 'password' ? 'text' : 'password';
        logPassword.type = type;
        const icon = btnTogglePw.querySelector('i');
        icon.className = type === 'password' ? 'far fa-eye' : 'far fa-eye-slash';
    });

    // Mostrar/Ocultar password no formulário de ativação
    const btnToggleActPw = document.getElementById('btn-toggle-act-pw');
    btnToggleActPw.addEventListener('click', () => {
        const type = actPassword.type === 'password' ? 'text' : 'password';
        actPassword.type = type;
        const icon = btnToggleActPw.querySelector('i');
        icon.className = type === 'password' ? 'far fa-eye' : 'far fa-eye-slash';
    });


    /* ==========================================================================
       8. Login e Área do Dashboard do Aluno
       ========================================================================== */
    const formLogin = document.getElementById('form-portal-login');
    const loginScreen = document.getElementById('portal-login-screen');
    const dashboardPanel = document.getElementById('portal-dashboard');

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();

        const identificador = document.getElementById('log-identificador').value.trim();
        const password = logPassword.value;

        // Procurar aluno por E-mail ou Número
        const student = alunosDB.find(a => (a.numero === identificador || a.email === identificador));

        if (!student) {
            showToast("Acesso Negado", "Número de estudante ou e-mail incorreto.", "error");
            return;
        }

        if (student.estado === 'Pendente_Ativacao') {
            showToast("Conta Pendente", "Conta pré-registada. Ative-a no link de e-mail enviado.", "error");
            return;
        }

        // Comparação de senha simulada (Hash verify)
        if (student.passwordHash !== password) {
            showToast("Acesso Negado", "Palavra-passe incorreta.", "error");
            return;
        }

        // Login Bem Sucedido - Carregar dados e trocar de ecrã
        loginScreen.style.display = 'none';
        dashboardPanel.style.display = 'block';
        showToast("Login Efetuado", `Bem-vindo, ${student.nome}!`, "success");

        // Preencher dados do cabeçalho
        document.getElementById('dash-student-name').innerText = student.nome;
        document.getElementById('dash-student-meta').innerText = `Nº de Estudante: ${student.numero} | Curso: ${student.curso}`;

        loadStudentAcademicData(student);
    });

    // Função de carregamento das notas, propinas, assiduidade baseados no curso
    function loadStudentAcademicData(student) {
        const cursoKey = student.curso.toLowerCase();
        const dadosCurso = cursosDB[cursoKey];

        if (!dadosCurso) return;

        // 1. Carregar Tabela de Notas
        const tableBody = document.getElementById('table-grades').querySelector('tbody');
        tableBody.innerHTML = '';
        dadosCurso.dashboard.notas.forEach(notaItem => {
            const tr = document.createElement('tr');
            const estadoClass = notaItem.nota >= 10 ? 'aprovado' : 'reprovado';
            const estadoTexto = notaItem.nota >= 10 ? 'Aprovado' : 'Recurso';
            
            tr.innerHTML = `
                <td><strong>${notaItem.cadeira}</strong></td>
                <td>${notaItem.nota.toFixed(1)} / 20</td>
                <td><span class="grade-badge ${estadoClass}">${estadoTexto}</span></td>
            `;
            tableBody.appendChild(tr);
        });

        // 2. Carregar Assiduidade
        const attContainer = document.getElementById('attendance-summary-list');
        attContainer.innerHTML = '';
        dadosCurso.dashboard.assiduidade.forEach(att => {
            const percent = ((att.total - att.faltas) / att.total) * 100;
            
            // Classes de cor dependendo da presença
            let fillClass = '';
            if (percent < 75) fillClass = 'danger'; // reprova por faltas se < 75%
            else if (percent < 85) fillClass = 'warning';

            const item = document.createElement('div');
            item.className = 'att-item';
            item.innerHTML = `
                <h5>${att.cadeira}</h5>
                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div class="progress-fill ${fillClass}" style="width: ${percent}%"></div>
                    </div>
                    <span>${percent.toFixed(0)}% (F: ${att.faltas})</span>
                </div>
            `;
            attContainer.appendChild(item);
        });

        // 3. Carregar Propinas do Aluno
        renderTuitions(student);

        // 4. Carregar Matrículas do Semestre
        const matriculasList = document.getElementById('matriculas-list-container');
        matriculasList.innerHTML = '';
        dadosCurso.dashboard.matriculas.forEach(mat => {
            const li = document.createElement('li');
            li.innerHTML = `${mat} <span>Turma B</span>`;
            matriculasList.appendChild(li);
        });
    }

    // Função auxiliar para carregar a lista de Propinas
    function renderTuitions(student) {
        const tuitionContainer = document.getElementById('tuition-list-container');
        tuitionContainer.innerHTML = '';

        student.propinas.forEach((prop, index) => {
            const item = document.createElement('div');
            item.className = 'tuition-item';

            if (prop.pago) {
                item.innerHTML = `
                    <div class="tuition-info">
                        <h5>${prop.mes}</h5>
                        <p>Valor: ${prop.valor.toLocaleString()} AKZ | Pago em: ${prop.data}</p>
                    </div>
                    <div class="tuition-actions">
                        <span class="badge-status ok"><i class="fas fa-check-double"></i> Pago</span>
                    </div>
                `;
            } else {
                item.innerHTML = `
                    <div class="tuition-info">
                        <h5>${prop.mes}</h5>
                        <p>Valor: ${prop.valor.toLocaleString()} AKZ | Estado: Pendente</p>
                    </div>
                    <div class="tuition-actions">
                        <span class="badge-status pending">Em Aberto</span>
                        <button class="btn btn-primary btn-sm btn-pagar-propina" data-index="${index}"><i class="fas fa-wallet"></i> Pagar</button>
                    </div>
                `;
            }
            tuitionContainer.appendChild(item);
        });
    }

    // Processar Pagamento de Propina na Dashboard
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-pagar-propina')) {
            const index = parseInt(e.target.getAttribute('data-index'));
            const studentName = document.getElementById('dash-student-name').innerText;
            
            // Procurar na base de dados
            const student = alunosDB.find(a => a.nome === studentName);
            
            if (student && student.propinas[index]) {
                const randRef = Math.floor(100000 + Math.random() * 900000);
                
                // Atualizar base de dados
                student.propinas[index].pago = true;
                student.propinas[index].data = new Date().toLocaleDateString('pt-PT');
                student.propinas[index].ref = `REF-${randRef}`;

                // Re-render
                renderTuitions(student);
                showToast("Mensalidade Paga!", `Propina de ${student.propinas[index].mes} regularizada com sucesso via simulador.`, "success");
            }
        }
    });

    // Botão Sair (Logout)
    const btnLogout = document.getElementById('btn-portal-logout');
    btnLogout.addEventListener('click', () => {
        dashboardPanel.style.display = 'none';
        loginScreen.style.display = 'block';
        logPassword.value = '';
        showToast("Sessão Terminada", "Volte sempre!", "info");
    });
});
