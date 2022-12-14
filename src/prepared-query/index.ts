// https://www.terraform.io/docs/providers/consul/r/prepared_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PreparedQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#connect PreparedQuery#connect}
  */
  readonly connect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenter PreparedQuery#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#id PreparedQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}
  */
  readonly ignoreCheckIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#name PreparedQuery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#near PreparedQuery#near}
  */
  readonly near?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#node_meta PreparedQuery#node_meta}
  */
  readonly nodeMeta?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#only_passing PreparedQuery#only_passing}
  */
  readonly onlyPassing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service PreparedQuery#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service_meta PreparedQuery#service_meta}
  */
  readonly serviceMeta?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#session PreparedQuery#session}
  */
  readonly session?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#stored_token PreparedQuery#stored_token}
  */
  readonly storedToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#tags PreparedQuery#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#token PreparedQuery#token}
  */
  readonly token?: string;
  /**
  * dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#dns PreparedQuery#dns}
  */
  readonly dns?: PreparedQueryDns;
  /**
  * failover block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#failover PreparedQuery#failover}
  */
  readonly failover?: PreparedQueryFailover;
  /**
  * template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#template PreparedQuery#template}
  */
  readonly template?: PreparedQueryTemplate;
}
export interface PreparedQueryDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ttl PreparedQuery#ttl}
  */
  readonly ttl?: string;
}

export function preparedQueryDnsToTerraform(struct?: PreparedQueryDnsOutputReference | PreparedQueryDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}

export class PreparedQueryDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PreparedQueryDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreparedQueryDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ttl = value.ttl;
    }
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface PreparedQueryFailover {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenters PreparedQuery#datacenters}
  */
  readonly datacenters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#nearest_n PreparedQuery#nearest_n}
  */
  readonly nearestN?: number;
}

export function preparedQueryFailoverToTerraform(struct?: PreparedQueryFailoverOutputReference | PreparedQueryFailover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datacenters),
    nearest_n: cdktf.numberToTerraform(struct!.nearestN),
  }
}

export class PreparedQueryFailoverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PreparedQueryFailover | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._nearestN !== undefined) {
      hasAnyValues = true;
      internalValueResult.nearestN = this._nearestN;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreparedQueryFailover | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datacenters = undefined;
      this._nearestN = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datacenters = value.datacenters;
      this._nearestN = value.nearestN;
    }
  }

  // datacenters - computed: false, optional: true, required: false
  private _datacenters?: string[]; 
  public get datacenters() {
    return this.getListAttribute('datacenters');
  }
  public set datacenters(value: string[]) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // nearest_n - computed: false, optional: true, required: false
  private _nearestN?: number; 
  public get nearestN() {
    return this.getNumberAttribute('nearest_n');
  }
  public set nearestN(value: number) {
    this._nearestN = value;
  }
  public resetNearestN() {
    this._nearestN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearestNInput() {
    return this._nearestN;
  }
}
export interface PreparedQueryTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#regexp PreparedQuery#regexp}
  */
  readonly regexp: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#type PreparedQuery#type}
  */
  readonly type: string;
}

export function preparedQueryTemplateToTerraform(struct?: PreparedQueryTemplateOutputReference | PreparedQueryTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regexp: cdktf.stringToTerraform(struct!.regexp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class PreparedQueryTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PreparedQueryTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreparedQueryTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regexp = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regexp = value.regexp;
      this._type = value.type;
    }
  }

  // regexp - computed: false, optional: false, required: true
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/r/prepared_query consul_prepared_query}
*/
export class PreparedQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_prepared_query";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/r/prepared_query consul_prepared_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PreparedQueryConfig
  */
  public constructor(scope: Construct, id: string, config: PreparedQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_prepared_query',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.17.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connect = config.connect;
    this._datacenter = config.datacenter;
    this._id = config.id;
    this._ignoreCheckIds = config.ignoreCheckIds;
    this._name = config.name;
    this._near = config.near;
    this._nodeMeta = config.nodeMeta;
    this._onlyPassing = config.onlyPassing;
    this._service = config.service;
    this._serviceMeta = config.serviceMeta;
    this._session = config.session;
    this._storedToken = config.storedToken;
    this._tags = config.tags;
    this._token = config.token;
    this._dns.internalValue = config.dns;
    this._failover.internalValue = config.failover;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect - computed: false, optional: true, required: false
  private _connect?: boolean | cdktf.IResolvable; 
  public get connect() {
    return this.getBooleanAttribute('connect');
  }
  public set connect(value: boolean | cdktf.IResolvable) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_check_ids - computed: false, optional: true, required: false
  private _ignoreCheckIds?: string[]; 
  public get ignoreCheckIds() {
    return this.getListAttribute('ignore_check_ids');
  }
  public set ignoreCheckIds(value: string[]) {
    this._ignoreCheckIds = value;
  }
  public resetIgnoreCheckIds() {
    this._ignoreCheckIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCheckIdsInput() {
    return this._ignoreCheckIds;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // near - computed: false, optional: true, required: false
  private _near?: string; 
  public get near() {
    return this.getStringAttribute('near');
  }
  public set near(value: string) {
    this._near = value;
  }
  public resetNear() {
    this._near = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearInput() {
    return this._near;
  }

  // node_meta - computed: false, optional: true, required: false
  private _nodeMeta?: { [key: string]: string }; 
  public get nodeMeta() {
    return this.getStringMapAttribute('node_meta');
  }
  public set nodeMeta(value: { [key: string]: string }) {
    this._nodeMeta = value;
  }
  public resetNodeMeta() {
    this._nodeMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMetaInput() {
    return this._nodeMeta;
  }

  // only_passing - computed: false, optional: true, required: false
  private _onlyPassing?: boolean | cdktf.IResolvable; 
  public get onlyPassing() {
    return this.getBooleanAttribute('only_passing');
  }
  public set onlyPassing(value: boolean | cdktf.IResolvable) {
    this._onlyPassing = value;
  }
  public resetOnlyPassing() {
    this._onlyPassing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyPassingInput() {
    return this._onlyPassing;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_meta - computed: false, optional: true, required: false
  private _serviceMeta?: { [key: string]: string }; 
  public get serviceMeta() {
    return this.getStringMapAttribute('service_meta');
  }
  public set serviceMeta(value: { [key: string]: string }) {
    this._serviceMeta = value;
  }
  public resetServiceMeta() {
    this._serviceMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMetaInput() {
    return this._serviceMeta;
  }

  // session - computed: false, optional: true, required: false
  private _session?: string; 
  public get session() {
    return this.getStringAttribute('session');
  }
  public set session(value: string) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // stored_token - computed: false, optional: true, required: false
  private _storedToken?: string; 
  public get storedToken() {
    return this.getStringAttribute('stored_token');
  }
  public set storedToken(value: string) {
    this._storedToken = value;
  }
  public resetStoredToken() {
    this._storedToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedTokenInput() {
    return this._storedToken;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new PreparedQueryDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: PreparedQueryDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // failover - computed: false, optional: true, required: false
  private _failover = new PreparedQueryFailoverOutputReference(this, "failover");
  public get failover() {
    return this._failover;
  }
  public putFailover(value: PreparedQueryFailover) {
    this._failover.internalValue = value;
  }
  public resetFailover() {
    this._failover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new PreparedQueryTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: PreparedQueryTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connect: cdktf.booleanToTerraform(this._connect),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
      ignore_check_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreCheckIds),
      name: cdktf.stringToTerraform(this._name),
      near: cdktf.stringToTerraform(this._near),
      node_meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeMeta),
      only_passing: cdktf.booleanToTerraform(this._onlyPassing),
      service: cdktf.stringToTerraform(this._service),
      service_meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._serviceMeta),
      session: cdktf.stringToTerraform(this._session),
      stored_token: cdktf.stringToTerraform(this._storedToken),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      token: cdktf.stringToTerraform(this._token),
      dns: preparedQueryDnsToTerraform(this._dns.internalValue),
      failover: preparedQueryFailoverToTerraform(this._failover.internalValue),
      template: preparedQueryTemplateToTerraform(this._template.internalValue),
    };
  }
}
